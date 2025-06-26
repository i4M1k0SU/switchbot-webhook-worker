import type { MyEnv } from '../types/Env';
import type { DeviceWebhook } from '../types/SwitchBot';
import { handle as MailboxMotionSensorHandler } from './MailboxMotionSensor';

type HandlerFunction = (event: DeviceWebhook, env: MyEnv) => Promise<void>;

const handlers: HandlerFunction[] = [
  MailboxMotionSensorHandler,
];

export async function handleDeviceWebhook(event: DeviceWebhook, env: MyEnv) {
  console.log(event);

  for (const handler of handlers) {
    await handler(event, env);
  }
}
