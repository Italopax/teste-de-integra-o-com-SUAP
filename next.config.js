/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: 'TyTNFooYwpj0LfuYKeAQUkzgCwMEDpWBNPgsShSf',
    REDIRECT_URI: 'http://localhost:3000/',
    SUAP_URL: 'https://suap.ifpi.edu.br',
    SCOPE: 'identificacao email documentos_pessoais'
  }
}

module.exports = nextConfig
