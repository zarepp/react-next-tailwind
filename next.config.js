const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/api/auth/login',
        destination: `${apiBaseUrl}/auth/login`,
      },
      {
        source: '/api/user',
        destination: `${apiBaseUrl}/user`,
      }
    ]
  },
}
