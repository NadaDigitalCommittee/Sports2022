let basedir = "/";
if (process.env.DEPLOY_ENV === "GH_PAGES") {
  basedir = "/Sports2022/";
} else if (process.env.DEPLOY_ENV === "CF_PAGES") {
  basedir = "/2022/";
}

export default {
  // 静的サイトとして生成する
  target: "static",

  // サーバーサイドで描画する
  ssr: true,

  // HTMLのヘッダ
  head: {
    title: "第93回灘校体育祭「拓」",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "第93回灘校体育祭「拓」公式ウェブサイト",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://sports.nada-sc.jp/2022/favicon.png",
      },

      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:site",
        property: "twitter:site",
        content: "@Nada_festival",
      },
      {
        hid: "twitter:player",
        property: "twitter:player",
        content: "@Nada_festival",
      },

      { name: "format-detection", content: "telephone=no" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: `${basedir}favicon.png` },
      { rel: "stylesheet", href: "https://use.typekit.net/fge6cqc.css" },
      { rel: "stylesheet", href: "https://use.typekit.net/roz8gaq.css" },
    ],
  },

  // 全てのページに適用するCSS
  css: [
    // ブラウザのデフォルトスタイルを無効化する
    "destyle.css/destyle.min.css",
    "@/assets/scss/global.scss",
  ],

  // プラグイン一覧
  plugins: [
    { src: "~/plugins/adobe-fonts.js", mode: "client" },
  ],

  // コンポーネントを自動インポートする
  components: true,

  router: {
    // Github Pages のURLでうまく動くように
    base: basedir,
    // 存在しないページすべてを404ページにリダイレクトする
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue"),
      });
    },
  },

  // ビルドに使うモジュール
  buildModules: [
    // TypeScript
    "@nuxt/typescript-build",
  ],

  // 実行時に使うモジュール
  modules: [
    // Nuxt Content
    "@nuxt/content",
    // グローバルなSass変数とMixin
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
  ],

  // Nuxt Contentの設定
  content: {},

  // Axios
  axios: {},

  // style-resourcesの設定
  styleResources: {
    scss: [
      "@/assets/scss/_variable.scss",
      "@/assets/scss/_mixin.scss",
    ],
  },

  // ビルド設定
  build: {},
};
