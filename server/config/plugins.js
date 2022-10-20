module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "no-reply@medinah-store.com",
        defaultReplyTo: "no-reply@medinah-store.com",
      },
    },
  },
});
