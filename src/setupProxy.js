const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(createProxyMiddleware('/auth', {
    target: "https://userbench-back.vercel.app",
    changeOrigin: true
  })),
  app.use(createProxyMiddleware('/auth/login/confirm', {
    target: "https://userbench-back.vercel.app",
    changeOrigin: true
  }))
}