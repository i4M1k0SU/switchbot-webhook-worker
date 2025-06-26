// npx wrangler secret put [KEY]
export type SecretEnv = {
  DISCORD_WEBHOOK_URL: string;
};

export type MyEnv = Env & SecretEnv;
