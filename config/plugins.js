module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "dgbpptbtn",
        api_key: "864831958381521",
        api_secret: "dRyCKgDM7oG3qvmdsFb0Ye63Xx8",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
