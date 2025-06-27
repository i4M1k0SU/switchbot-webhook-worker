# SwitchBot Webhook Worker

SwitchBot Webhook Receiver for Cloudflare Workers.

## Setup

```shell
npm ci
```

### Cloudflare Workers

```shell
npx wrangler login # Login to Cloudflare
npm run deploy # Deploy
```

### SwitchBot API

```shell
npm run setupWebhook -- --token=[Token] --secret=[Secret] --url=[URL] # Setup Webhook URL
npm run deleteWebhook -- --token=[Token] --secret=[Secret] --url=[URL] # Delete Webhook URL
```
