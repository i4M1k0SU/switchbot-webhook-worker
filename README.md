# SwitchBot Webhook Worker

SwitchBot Webhook Receiver for Cloudflare Workers.

## Setup

```shell
pnpm run ci
```

### Cloudflare Workers

```shell
pnpm exec wrangler login # Login to Cloudflare
pnpm exec wrangler secret put [KEY] # Set Secret env
pnpm run deploy # Deploy
```

### SwitchBot API

```shell
pnpm run setupWebhook -- --token=[Token] --secret=[Secret] --url=[URL] # Setup Webhook URL
pnpm run deleteWebhook -- --token=[Token] --secret=[Secret] --url=[URL] # Delete Webhook URL
```
