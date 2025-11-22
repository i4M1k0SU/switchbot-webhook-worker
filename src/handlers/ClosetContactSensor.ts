import type { MyEnv } from '../types/Env';
import type { DeviceWebhook } from '../types/SwitchBot';
import { discordWebhook } from '../functions/Discord';

const CLOSET_NAME = 'クローゼット';
const CLOSET_ICON = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbBA0B-2Ijlx9QoROexqMiCb56CvqYev00fao9BLFoaNg7cfa4lvb3PzbLziiuSHxNtEwdhtV1vmoQ8NZehtE7JZdM0W9-es-yXI34IwwVMtnr65HFWO9IcnzgGfZAQZwWF2gGvQhqWiDS/s800/closet_seiriseiton_yes.png';

export async function handle(event: DeviceWebhook, env: MyEnv): Promise<void> {
  const c = event.context;
  if (c.deviceType !== 'WoContact' || c.deviceMac !== env.CLOSET_CONTACT_SENSOR_MAC) {
    return;
  }

  // 人がいる時は何もしない
  if (c.detectionState === 'DETECTED') {
    return;
  }

  // 人がいないのに照明が点いている
  if (c.brightness === 'bright') {
    await discordWebhook(env.DISCORD_WEBHOOK_URL, CLOSET_NAME, '照明が点いたままです', CLOSET_ICON);
  }

  // ドアを開けっぱなし
  if (c.openState === 'timeOutNotClose') {
    await discordWebhook(env.DISCORD_WEBHOOK_URL, CLOSET_NAME, 'ドアが開けっぱなしです', CLOSET_ICON);
  }
}
