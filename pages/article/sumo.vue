<template>
  <div class="bg">
    <Header/>
    <div class="naiyou">
      <img src="~/assets/img/forarticle/sumo.svg" alt="" class="midasi">
      <div class="rikisi">
        <p class="itirann">力士一覧</p>
        <div class="kessyou">
          <p>決勝トーナメント進出者</p>
        </div>
        <div class="best16">
          <p>ベスト16</p>
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

    .midasi{
      width: min(50vw,200px);
    }
  }
  .rikisi{
    width: 90%;
    margin: auto;
    margin-top: 30px;
    .itirann{
      width: 100%;
      background-color: #FF4E00;
      padding: 15px 0;
    }
  }
</style>

<script lang="ts">
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
  methods: {
  },
});
</script>
