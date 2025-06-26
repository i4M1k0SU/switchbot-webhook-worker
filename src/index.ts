import type { MyEnv } from './types/Env';
import type { DeviceWebhook } from './types/SwitchBot';
import { handleDeviceWebhook } from './handlers';

export default {
  async fetch(request: Request, env: MyEnv, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname.startsWith('/healthcheck')) {
      return new Response('HEALTHY', { status: 200 })
    }

    if (!url.pathname.startsWith('/hooks')) {
      return new Response('Not Found', { status: 404 })
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }

    const data = await request.json<DeviceWebhook>().catch(() => null);

    if (!data) {
      return new Response('Invalid request', { status: 400 });
    }

    await handleDeviceWebhook(data, env);

    return new Response('OK', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  },
} satisfies ExportedHandler<MyEnv>;
