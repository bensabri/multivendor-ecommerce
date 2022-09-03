module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '74936ad34b5e34480cf57f6c9a338f75'),
  },
});
