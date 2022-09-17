<template>
    <div>
        <Header/>
         <div class="body">
        <p class="title"><span class="iti">運</span>搬課</p>
        <!-- 画像がない -->
        <div class="concept">
         <div class="profile">
          <img src="~/assets/img/josuke.png" alt="運搬課長の顔写真" class="face">
           <div class="names">
           <p class="role">運搬課長</p>
           <div class="pl"/>
           <p class="name">田中優希</p>
           <div class="pl2"/>
           </div>
         </div> 
        </div>
        <p class="aisatu">運搬課長の田中です。運搬課の仕事内容は主に２つあります。１つ目は体育委員のための運搬に関する資料作成、2つ目は体育祭当日に運搬テントで運搬する用具の準備です。</p>
        <p class="aisatu">今年度の体育祭はコロナ前の観客無制限フル開催を取り戻しただけでなく、この2年で技術が確立されてきた体育祭HPと動画配信をも取り入れた、まさにポストコロナの体育祭のあるべき姿なのではないでしょうか。この体育祭を実現するために、精力善用自他共栄の精神のもと共に励んできた、体育委員長をはじめとする全ての関係者の方々に改めて敬意を表したいと思います。最後に、この体育祭がそのテーマ「拓」にふさわしい、新時代の幕開けとして後世に誇れる体育祭となることを願っています。みんなで盛り上げていきましょう！</p>
    </div>
</template>

<style scoped lang="scss">
.title{
 font-size: 50px;
 font-family: sans-serif;
 margin: auto;
 color: #000000
 .iti{
  font-size: 40px;
  font-family: sans-serif;
  margin: auto;
  color: #FF4E00;
  }
 } 
.concept{
    margin: auto;
    text-align: left;
    width: min(100vw,max(70vw,600px));
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
    width: min(100vw,max(50% , 600px));
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
  font-family: sans-serif;
  margin: auto;
  padding-right: 15px;
  padding-left:15px;
  text-align: center;
  width: calc( min(100vw,max(50% , 600px)) - 30px);
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'delivery',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '運搬課 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}article/delivery` },
      ],
    };
  },
  methods: {
  },
});
</script>
