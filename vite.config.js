const config = {
  server: {
    proxy: {
      "/api": {
        target: "http://nedomen.ru",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};

export default config;
