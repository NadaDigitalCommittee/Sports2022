let dir = '/favicon.png';
if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  dir = '/Sports2022/favicon.png';
}

export default {
  // 静的サイトとして生成する
  target: 'static',

  // サーバーサイドで描画する
  ssr: true,

  // HTMLのヘッダ
  head: {
    title: '2022年灘校体育祭',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: dir },
      {rel: 'stylesheet',href: "https://use.typekit.net/fge6cqc.css"}
    ],
  },

  // 全てのページに適用するCSS
  css: [
    // ブラウザのデフォルトスタイルを無効化する
    'destyle.css/destyle.min.css',
    '@/assets/scss/global.scss',
  ],

  // プラグイン一覧
  plugins: [
  ],

  // コンポーネントを自動インポートする
  components: true,

  router: {
    // Github Pages のURLでうまく動くように
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/Sports2022/' : '/',
    // 存在しないページすべてを404ページにリダイレクトする
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      });
    },
  },

  // ビルドに使うモジュール
  buildModules: [
    // TypeScript
    '@nuxt/typescript-build',
  ],

  // 実行時に使うモジュール
  modules: [
    // Nuxt Content
    '@nuxt/content',
    // グローバルなSass変数とMixin
    '@nuxtjs/style-resources',
  ],

  // Nuxt Contentの設定
  content: {},

  // Axios
  axios: {},

  // style-resourcesの設定
  styleResources: {
    scss: [
      '@/assets/scss/_variable.scss',
      '@/assets/scss/_mixin.scss',
    ],
  },

  // ビルド設定
  build: {},
};
