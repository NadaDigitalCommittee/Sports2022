<template>
  <div class="bg">
    <Header/>
    <div class="naiyou">
      <img src="~/assets/img/forarticle/cheer.png" alt="" class="midasi"><br/>
      <img src="~/assets/img/forarticle/cheer_top.png" alt="" class="full">
      
    <div class="aisatu">
      <p class="title">団長挨拶</p>
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

    .midasi{
      width: min(50vw,200px);
    }
    .full{
      width: min(90vw,324px);
      margin-top: 30px;
      margin-left: max(calc(min(95vw,max(70vw,600px)) * 0.5 - 45vw),calc(min(95vw,max(70vw,600px)) * 0.5 - 162px));
    }
  }
  .aisatu{
    width: 60vw;
    margin: auto;
    margin-top: max(20px,5vh);
  }
  .title{  
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: min(25px,8vw);
  }
</style>

<script >
import Vue from 'vue';

export default Vue.extend({
  name: 'cheer',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '応援団特集 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/cheer` },
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
