import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: { // vite에서 런타임과 번들링 시에 절대 경로 사용을 위해서 별칭 적용
    alias: {
      "@": path.resolve(__dirname, "src"), // "현재 파일의 기준으로(__dirname) src 파일을 별칭이 @인 절대 경로로 설정하겠다." 라는 의미.
    },
  },
  plugins: [tsconfigPaths()],
  esbuild: { // 빌드 시에 vite가 JSX 문법을 변환할 수 있도록 설정
    jsx: "transform", // JSX 문법을 JS로 변환하도록 설정
    jsxInject: `import { h } from '@/lib/jsx/jsx-runtime'`, // JSX 문법이 사용된 파일에 변환 함수인 h를 자동으로 import 하도록 설정
    jsxFactory: "h", // HTML 태그를 h("div", {...}) 형태로 변환
  },
});
