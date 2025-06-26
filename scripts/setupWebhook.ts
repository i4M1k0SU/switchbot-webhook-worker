import { SwitchBotOpenAPI } from 'node-switchbot';

type Args = {
  token?: string;
  secret?: string;
  url?: string;
};

const args: Args = {};

process.argv.slice(2).forEach(arg => {
  const matchEqual = arg.match(/^--([^=]+)=(.*)$/);
  if (!matchEqual) {
    return;
  }
  const [, key, value] = matchEqual;
  if (key === 'token') {
    args.token = value;
    return;
  }
  if (key === 'secret') {
    args.secret = value;
    return;
  }
  if (key === 'url') {
    args.url = value;
    return;
  }
});

if (!args.token || !args.secret || !args.url) {
  console.error('Args Error.');
  process.exit(1);
}

new SwitchBotOpenAPI(args.token, args.secret)
  .setupWebhook(args.url)
  .then(() => {
    console.log('Done.');
  })
  .catch(() => {
    console.error('API Error.');
    process.exit(1);
  });
