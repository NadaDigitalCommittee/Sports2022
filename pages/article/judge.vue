<template>
  <div class="bg">
    <Header/>
    <div class="speech">
      <div class="concept">
        <div class="midasi">
        <p class="midasitext"><span class="changecolor">審</span>判課</p>

        </div>
        <div class="profile">
          <img src="~/assets/img/forarticle/horisaka.png" alt="審判課長の顔写真" class="face">
          <div class="names">
            <p class="role">審判課長</p>
            <div class="pl"/>
            <p class="name">堀坂俊輔</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">審判課長の堀坂です。審判課は競技規則を作成・改定するほか、体育祭当日の審判業務を指揮しています。競技者が純粋に勝負を楽しみ、さらに競技者だけでなく観客の生徒及び保護者の皆様にも楽しんでいただけるような環境を作り出すことこそが審判課の使命であると考えています。<br/><br/>この数年間、新型コロナウイルスの影響もあり、我々は「集」よりも「個」を意識した学校生活を送るようになったと感じます。体育祭の鼓笛隊は廃止され、垂れ幕制作の技術の継承は危機に陥りつつあります。76回生を中心とする体育委員会はそのような現状に対する危機感を持って準備を進めてきました。受け継がれてきた伝統を着実に守り進化させるための大切な一歩として、もう一度生徒全員が「灘校」という集団として輝くための第一歩として、この第93回灘校体育祭が皆様の心に深く刻まれることを祈っております。</p>
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
width:126px;
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
  name: 'judge',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '審判課 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/judge` },
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
