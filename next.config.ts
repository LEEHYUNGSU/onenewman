import type { NextConfig } from "next";

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true, // 서버 사이드 렌더링 활성화
      displayName: true, // 개발 중 편리한 디버깅용
    },
  },
};

module.exports = nextConfig;

export default nextConfig;
