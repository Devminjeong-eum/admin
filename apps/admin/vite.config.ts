import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import ogPlugin, { type Options as OpenGraphConfig } from 'vite-plugin-open-graph';

const openGraphConfig: OpenGraphConfig = {
    basic: {
        title: '데브말싸미 어드민 | 개발 용어 발음 사전',
        type: 'website',
        image: {
            url: 'https://dev-malssami-bucket.s3.ap-northeast-2.amazonaws.com/assets/opengraph-image.png',
        },
        url: 'https://api.dev-malssami.site',
        description:
            '데브말싸미 사이트를 운영하고 관리하기 위해 신설된 어드민 페이지입니다.',
        determiner: 'the',
        locale: 'ko_KR',
        siteName: '데브말싸미 어드민',
    },
}

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: "#/", replacement: "/src/" }]
    },
    plugins: [react(), ogPlugin(openGraphConfig)],
})
