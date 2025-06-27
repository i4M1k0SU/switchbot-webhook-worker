// npx wrangler secret put [KEY]
export type SecretEnv = {
  DISCORD_WEBHOOK_URL: string;
  MAILBOX_MOTION_SENSOR_MAC: string;
};

export type MyEnv = Env & SecretEnv;
