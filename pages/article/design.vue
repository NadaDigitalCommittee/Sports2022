<template>
    <div class="bg">
      <Header/>
      <div class="speech">
        <div class="concept">
          <img src="~/assets/img/forarticle/design.png" alt="concept" class="midasi">
          <div class="profile">
            <img src="~/assets/img/josuke.png" alt="デザイン課長の顔写真" class="face">
            <div class="names">
              <p class="role">デザイン課長</p>
              <div class="pl"/>
              <p class="name">髙島晟輔</p>
              <div class="pl2"/>
            </div>
          </div>
          <p class="aisatu">デザイン課長の髙島です。デザイン課はロゴをはじめとし、うちわやパンフレット、今皆さんにみていただいている体育祭HPのデザインまで多種多様なデザインを担当しました。特に力を入れたのはロゴデザインです。コロナから脱却し、新たな体育祭を開拓するこの第93回灘校体育祭の力強さを、飛沫や線を効果的に用いて表現しました。灘校体育祭を彩る象徴として皆さんに愛されるロゴになれば、これほど嬉しいことはありません。<br/><br/>さて、何度も述べている通り、ついに今年の体育祭は無制限開催にたどり着くことができました。これまで灘校が紡いできた92回もの体育祭の伝統。そしてコロナをきっかけに芽生えた新たな体育祭の形。僕らはこれらを融合させ、体育祭に関わるすべての人が最高に盛り上がる、「めちゃくちゃおもろい」体育祭を作り出します。第93回灘校体育祭「拓」、発車の合図は間も無くです。</p>
      </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.speech{
  width: 100vw;
  margin-top: 20px;
  .midasi{
    position: relative;
    left: 10px;
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
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
  margin: auto;
  padding-right: 15px;
  padding-left:15px;
  text-align: center;
  width: calc( min(100vw,max(70% , 600px)) - 30px);
}
</style>

<script lang="ts">
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
  methods: {
  },
});
</script>
