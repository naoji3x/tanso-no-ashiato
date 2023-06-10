/** @type {import('next').NextConfig} */

//
// GitHub Pagesでリポジトリ名を含むURLにするための設定
// GitHub の環境変数として URL を設定しておく
// 例: https://<username>.github.io/<repositoryName>
//
const schemeFqdn = process.env.SCHEME_FQDN
  ? process.env.SCHEME_FQDN
  : 'https://tanso-no-ashiato.jp'

const directory = process.env.DIRECTORY ? '/' + process.env.DIRECTORY : ''

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    schemeFqdn,
    directory
  }
}

module.exports = nextConfig
