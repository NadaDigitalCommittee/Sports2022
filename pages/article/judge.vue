<template>
  <div class="bg">
    <Header/>
    <div class="speech">
      <div class="concept">
        <img src="~/assets/img/forarticle/judge.png" alt="審判課" class="midasi">
        <div class="profile">
          <img src="~/assets/img/forarticle/horisaka.png" alt="審判課長の顔写真" class="face">
          <div class="names">
            <p class="role">審判課長</p>
            <div class="pl"/>
            <p class="name">堀坂俊輔</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni harum expedita! Est veniam inventore atque ratione error temporibus consequatur, voluptas nam architecto quod provident vitae, suscipit mollitia aliquam aspernatur.</p>
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
  methods: {
  },
});
</script>
