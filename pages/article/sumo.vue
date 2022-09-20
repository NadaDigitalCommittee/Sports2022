<template>
  <div class="bg">
    <Header/>
    <div class="naiyou">
      <img src="~/assets/img/forarticle/sumo.svg" alt="" class="midasi">
      <div class="rikisi">
        <p class="itirann midasi">力士一覧</p>
        <div class="kessyou">
          <p class="midasi">決勝トーナメント進出者</p>
        </div>
        <div class="best16">
          <p class="midasi">ベスト16</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .bg{
    width: 100vw;
  }
  .naiyou{
    width: min(95vw,max(70vw,600px));
    margin:0 auto;
    margin-top: 15px;

  }
  .rikisi{
    position: relative;
    left: -10px;
    width: calc(100% + 20px);
    margin: auto;
    margin-top: 30px;
    .itirann{
      width: 100%;
      background-color: #FF4E00;
      padding: 15px 0;
      text-align: center;
      color: white;
      font-size: min(25px,8vw);
    }
    .kessyou{
      margin: 10px 0;
      width: 80%;
      margin-left: 10%;
      border-bottom-color: black;
      border-bottom-width: 1px;
    }
    .best16{
      margin: 10px 0;
      width: 80%;
      margin-left: 10%;
      border-bottom-color: black;
      border-bottom-width: 1px;
    }
    .midasi{
      width: 100%;
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: min(20px,6.4vw);
    }
  }
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'sumo',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '相撲特集 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/sumo` },
      ],
    };
  },
  mounted() {
    // font
    const d = document;
    const config = {
      kitId: 'zlv1mor',
      scriptTimeout: 3000,
      async: true,
    };
    const h = d.documentElement; const t = setTimeout(() => { h.className = `${h.className.replace(/\bwf-loading\b/g, '')} wf-inactive`; }, config.scriptTimeout); const tk = d.createElement('script'); let f = false; const s = d.getElementsByTagName('script')[0]; let a; h.className += ' wf-loading'; tk.src = `https://use.typekit.net/${config.kitId}.js`; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != 'complete' && a != 'loaded') return; f = true; clearTimeout(t); try { Typekit.load(config); } catch (e) {} }; s.parentNode.insertBefore(tk, s);
  },
  methods: {
  },
});
</script>
