<template>
    <div class="bg">
      <Header/>
      <div class="speech">
        <div class="concept">
          <div class="midasi">
            <p class="midasitext"><span class="changecolor">デ</span>ザイン課</p>
          </div>
          <div class="profile">
            <img src="~/assets/img/no_image_square.jpg" alt="デザイン課長の顔写真" class="face">
            <div class="names">
              <p class="role">デザイン課長</p>
              <div class="pl"/>
              <p class="name">T.J</p>
              <div class="pl2"/>
            </div>
          </div>
          <p class="aisatu">デザイン課長のTです。デザイン課はロゴをはじめとし、うちわやパンフレット、今皆さんにみていただいている体育祭HPのデザインまで多種多様なデザインを担当しました。特に力を入れたのはロゴデザインです。コロナから脱却し、新たな体育祭を開拓するこの第93回灘校体育祭の力強さを、飛沫や線を効果的に用いて表現しました。灘校体育祭を彩る象徴として皆さんに愛されるロゴになれば、これほど嬉しいことはありません。<br/><br/>さて、何度も述べている通り、ついに今年の体育祭は無制限開催にたどり着くことができました。これまで灘校が紡いできた92回もの体育祭の伝統。そしてコロナをきっかけに芽生えた新たな体育祭の形。僕らはこれらを融合させ、体育祭に関わるすべての人が最高に盛り上がる、「めちゃくちゃおもろい」体育祭を作り出します。第93回灘校体育祭「拓」、発車の合図は間も無くです。</p>
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
      border-radius:50% ;
      border-width: 3px;
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
  width:168px;
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
  name: 'design',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: 'デザイン課 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/design` },
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
