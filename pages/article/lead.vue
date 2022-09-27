<template>
  <div class="bg">
    <Header/>
    <div class="speech">
      <div class="concept">
        <div class="midasi">
          <p class="midasitext"><span class="changecolor">引</span>率課</p>
        </div>
        <div class="profile">
          <img src="~/assets/img/no_image_square.jpg" alt="引率課長の顔写真" class="face">
          <div class="names">
            <p class="role">引率課長</p>
            <div class="pl"/>
            <p class="name">F.S</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">引率課長のF.Sです。引率課は競技に出場する生徒をスムーズに最短距離で引率する方法を考え、その資料を作成しています。一見その重要性は伝わらないかもしれませんが、引率の方法を間違えると競技の進行が大幅に遅れ見栄えも悪くなってしまいます。競技のスムーズな進行は体育委員の美しい引率によって成り立っていることを忘れないで頂けると幸いです。以上引率課の紹介でした。<br/><br/>体育祭は雨天や新型コロナウイルスの影響で３年連続短縮開催を余儀なくされ、これまで続いてきた伝統も存続の危機に立たされています。通常開催を経験したことがある最後の学年である僕達76回生が体育委員会に所属するのも今年が最後となります。体育委員会は76回生を中心としてその責任、重圧、期待を背負いながら常に前を向き、新たな形の体育祭を模索し続けてきました。この体育祭が、かつての体育祭を取り戻す、いやそれをはるかに上回る新時代の幕開けとなることを願っています。</p>
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
  name: 'lead',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '引率課 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/lead` },
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
