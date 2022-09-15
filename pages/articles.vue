<template>
    <div>
        <Header/>
        <div class="body">
        <div class="articles">
          <img src="~/assets/img/articles.png" alt="articles" class="midasi">
          <div class="links">
            <div @click="$router.push('/article/lead')" class="link">
              <p>引率課</p>
            </div>
            <div @click="$router.push('/article/judge')" class="link">
              <p>審判課</p>
            </div>
            <div @click="$router.push('/article/delivery')" class="link">
              <p>運搬課</p>
            </div>
            <div @click="$router.push('/article/design')" class="link">
              <p>デザイン課</p>
            </div>
            <div @click="$router.push('/article/field')" class="link">
              <p>フィールド課</p>
            </div>
            <div @click="$router.push('/article/sumo')" class="link tokusyu">
              <p>相撲特集</p>
            </div>
            <div @click="$router.push('/article/cheer')" class="link tokusyu">
              <p>応援団特集</p>
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
  width: min(95vw,max(70vw,600px));
  margin:0 auto;
  margin-top: 3vh;
  text-align: left;
  .midasi{
    height: 50px;
  }
  .links{
    width: min(95vw,max(70vw,600px));
    
    .link{
      height: 40vh;
      width: calc(min(100vw,max(70vw,600px)) * 0.7);
      margin: 10px auto;
      background-color: #45485a;
      
    }
    .tokusyu{
      background-color: #FF4E00;
    }
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
