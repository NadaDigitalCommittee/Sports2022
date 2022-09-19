<template>
  <div class="bg">
    <Header/>
    <div class="naiyou">
      <img src="~/assets/img/forarticle/cheer.png" alt="" class="midasi"><br/>
      <img src="~/assets/img/forarticle/cheer_top.png" alt="" class="full">
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
      width: 200px;
    }
    .full{
      width: 324px;
      margin-top: 30px;
      margin-left: calc(min(95vw,max(70vw,600px)) * 0.5 - 162px);
    }
  }
</style>

<script lang="ts">
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
  methods: {
  },
});
</script>
