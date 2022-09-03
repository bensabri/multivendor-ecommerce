module.exports = ({ env }) => (
  {
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
  },
  {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  }
);
