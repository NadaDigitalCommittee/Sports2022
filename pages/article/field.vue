<template>
  <div class="bg">
    <Header/>
    <div class="speech">
      <div class="concept">
        <div class="midasi">
        <p class="midasitext"><span class="changecolor">フ</span>ィールド課</p>
        </div>
        <div class="profile">
          <img src="~/assets/img/no_image_square.jpg" alt="フィールド課長の顔写真" class="face">
          <div class="names">
            <p class="role">フィールド課長</p>
            <div class="pl"/>
            <p class="name">I.T</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">フィールド課では、他の課に配属されない様々な業務を担当します。目立つところでは新競技の考案やプログラムの作成がありますが、用具の発注や合同体育の調整に至るまで、委員長を務めるIを中心に、灘校体育祭を縁の下から支えてきました。<br/>
体育祭本番は本部テントからフィールド全体の管理と指示を行います。</p>
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
.speech{
width: 100vw;
margin-top: 20px;
.midasi{
  position: relative;
  margin: 0 auto;
  width: calc( min(100vw,max(70% , 600px)) - 60px);
  height: 40px;
}
.midasi img{
  height: 40px;
  width: 238px;
}
.concept{
  width: min(100vw,max(75vw,600px));
  margin: 0 auto;
  text-align: left;
  margin-bottom: 50px;
  img{
    border-color: $subcolor;
  }
  .role{
    position: relative;
    font-size:24px;
    margin-left: 10px;
    z-index: 3;
  }
  .pl{
    background-color: $subcolor;
  }
  .pl2{
    background-color: $subcolor;
  }
  .name{
    position: relative;
    z-index: 3;
    margin-left: 45px;
    font-size:30px;
  }
}
.profile{
  margin: auto;
  margin-top:15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  font-family: source-han-serif-japanese, serif;
  font-weight: 900;
  width: min(100vw,max(60% , 600px));
  img{
    width: 120px;
    height: 120px;
    border-color: #ffc400;
    border-radius:50% ;
    border-width: 3px;
  }
  .names{
    margin-left: 20px;
    margin-top: 15px;
  }
}
}
.pl{
position: relative;
top: -12px;
height: 15px;
width:196px;
clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
opacity: 0.6;
}
.pl2{
position: relative;
top: -16px;
left: +20px;
height: 20px;
width:172px;
clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
opacity: 0.6;
}
.aisatu{
font-size: 16px;
  font-family: yu-gothic-pr6n,sans-serif;
  font-weight: 400;
  font-style: normal;
margin: auto;
padding-right: 15px;
padding-left:15px;
text-align: left;
width: calc( min(100vw,max(70% , 600px)) - 30px);
line-height: 26px;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'field',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: 'フィールド課 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/field` },
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
