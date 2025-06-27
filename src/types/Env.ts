// npx wrangler secret put [KEY]
type SecretEnv = {
  DISCORD_WEBHOOK_URL: string;
  MAILBOX_MOTION_SENSOR_MAC: string;
};

export type MyEnv = Env & SecretEnv;
