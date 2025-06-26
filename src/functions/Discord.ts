type DiscordWebhookPayload = {
  username: string;
  content: string;
  avatar_url?: string;
};

export async function discordWebhook(webhookUrl: string, username: string, message: string, avatarUrl?: string) {
  const payload: DiscordWebhookPayload = {
    username,
    content: message,
  };

  if (avatarUrl) {
    payload.avatar_url = avatarUrl;
  }

  return await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}
