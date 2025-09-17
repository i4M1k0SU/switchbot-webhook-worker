import { env as testEnv, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';
import type { MyEnv } from '../src/types/Env';

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

const env: MyEnv = {
	...testEnv,
	DISCORD_WEBHOOK_URL: '',
  MAILBOX_MOTION_SENSOR_MAC: '',
};

describe('SwitchBot Webhook worker', () => {
	it('responds with HEALTHY (unit style)', async () => {
		const request = new IncomingRequest('http://example.com/healthcheck');
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(await response.text()).toMatchInlineSnapshot(`"HEALTHY"`);
	});

	it('responds with HEALTHY (integration style)', async () => {
		const response = await SELF.fetch('https://example.com/healthcheck');
		expect(await response.text()).toMatchInlineSnapshot(`"HEALTHY"`);
	});
});
