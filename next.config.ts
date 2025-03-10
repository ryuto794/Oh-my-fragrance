import type { NextConfig } from "next";

// GitHub Pagesのリポジトリ名を取得
const repo = 'oh-my-fragrance';
const assetPrefix = process.env.NODE_ENV === 'production' ? `/${repo}` : '';
const basePath = process.env.NODE_ENV === 'production' ? `/${repo}` : '';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // GitHub Pages用の設定
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  // 出力をstaticにする
  output: 'export',
};

export default nextConfig;
