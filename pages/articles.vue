<template>
    <div>
        <Header/>
        <div class="body">
        <div class="articles">
          <img src="~/assets/img/articles.png" alt="articles" class="midasi">
          <div class="links">
            <div class="link">

            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.body{
  width: 100vw;
}
.articles{
  width: min(100vw,max(70vw,600px));
  margin:0 auto;
  text-align: left;
  .midasi{
    height: 50px;
  }
  .links{
    width: min(100vw,max(70vw,600px));
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'articles',
  data() {
    return {
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '記事特集 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}topics` },
      ],
    };
  },
  methods: {
  },
});
</script>
