import type { MyEnv } from '../types/Env';
import type { DeviceWebhook } from '../types/SwitchBot';
import { discordWebhook } from '../functions/Discord';

export async function handle(event: DeviceWebhook, env: MyEnv): Promise<void> {
	if (event.context.deviceType !== 'WoPresence' || event.context.deviceMac !== env.MAILBOX_MOTION_SENSOR_MAC) {
        return;
    }

	if (event.context.detectionState === 'DETECTED') {
		await discordWebhook(
			env.DISCORD_WEBHOOK_URL,
			'郵便受け',
			'開かれました',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuVEr-cnrFixh2J35I6aI1_qaQRWlXe_lcKr1UV9vuxrnAsbSwQxSU5JnoMLyb80bXvc8tkNIq37qzFTdVZq9oW8AZZiH0FsU49G4AGBtdT3xYHpjEfC8iBfxt5mWb5IesxXVzBDRu5EI/s800/yuubin_mail_bin.png',
		);
	}
}
