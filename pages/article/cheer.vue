<template>
  <div class="bg">
    <Header/>
    <div class="naiyou">
      <div class="midasi">
        <p class="midasitext"><span class="changecolor">応</span>援団特集</p>
      </div>
      <br/>
      <div class="aisatu">
        <p class="title">団長挨拶</p>
        <p class="nakami">１組団長のNです。今回は全クラス合同となり、対決では無くなってしまいましたが、その分多くの人が集まり、大迫力の演技を見せられると思うので期待していて下さい！<br/><br/>２組団長のTです！扇子や人数の多さを活かしたダイナミックな演舞を披露できるよう日々練習に取り組んできたのでぜひ見てください！</p>
      </div>
      <div class="aisatu">
        <p class="nakami">
          ３組団長のUです。３年目の応援団なので、今まで見てきた先輩方を超えるのを目指して、演舞の構成・内容、Tシャツのデザイン、本番の衣装等々全て考えに考えて最高のものを作り上げてきました！観に来て頂けると幸いです。<br/><br/>４組団長のHです。第93代灘校応援団は全組合同で、青い衣装をまとい龍をモチーフにした演舞を披露します。体育祭全体の成功を祈願し、力強さと繊細さで、観る人を魅了します！
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .midasitext{
    
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 40px;
    .changecolor{
      color: #FF4E00;
    }
  }
  .bg{
    width: 100vw;
  }
  .naiyou{
    width: min(95vw,max(70vw,600px));
    margin:0 auto;
    margin-top: 15px;
    margin-bottom: 160px;
    .midasi{
      width: calc( min(100vw,max(70% , 600px)) - 30px);
      margin: 0 auto;
    }
    .midasi img{
      height: 40px;
    }
  }
  
  .full{
      width: min(90vw,324px);
      margin-top: 30px;
      margin-left: max(calc(min(95vw,max(70vw,600px)) * 0.5 - 45vw),calc(min(95vw,max(70vw,600px)) * 0.5 - 162px));
    }
  .full2{
      width: min(90vw,324px);
      margin-top: 30px;
      margin-left: max(calc(min(95vw,max(70vw,600px)) * 0.5 - 45vw),calc(min(95vw,max(70vw,600px)) * 0.5 - 162px));
    }
  .aisatu{
    width: calc( min(100vw,max(70% , 600px)) - 30px);
    margin: auto;
    margin-top: max(20px,5vh);
  }
  .title{  
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: min(25px,8vw);
    margin: 25px 0;
  }
  .nakami{
    font-size: min(15px,4.8vw);
    font-size: 16px;
    font-family: yu-gothic-pr6n,sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 26px;
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
