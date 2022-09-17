<template>
    <div>
        <Header/>
        <div class="body">
        <div class="articles">
          <img src="~/assets/img/articles.png" alt="articles" class="midasi">
          <div class="links">
            <div @click="$router.push('/article/lead')" class="link">
              <p>体育委員会各課紹介</p>
              <div class="inside">
              <p>引率課</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
            </div>
            <div @click="$router.push('/article/judge')" class="link">
              <p>体育委員会各課紹介</p>
              <div class="inside">
                <p>審判課</p>
              <img src="~/assets/img/yajirusi.png" alt="">

              </div>
            </div>
            <div @click="$router.push('/article/delivery')" class="link">
              <p>体育委員会各課紹介</p>
              <div class="inside">
                <p>運搬課</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
            </div>
            <div @click="$router.push('/article/design')" class="link">
              <p>体育委員会各課紹介</p>
              <div class="inside">
                <p>デザイン課</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
            </div>
            <div @click="$router.push('/article/field')" class="link">
              <p>体育委員会各課紹介</p>
              <div class="inside">
                <p>フィールド課</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
            </div>
            <div @click="$router.push('/article/sumo')" class="link tokusyu">
              <p>体育祭当日</p>
              <div class="inside">
                <p>相撲特集</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
            </div>
            <div @click="$router.push('/article/cheer')" class="link tokusyu">
              <p>体育祭当日</p>
              <div class="inside">
                <p>応援団特集</p>
              <img src="~/assets/img/yajirusi.png" alt="">
              </div>
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
      color:#FFFFFF;
      font-family: toppan-bunkyu-midashi-go-std, sans-serif;
      font-weight: 900;
      font-style: normal;
      font-size: 15px;
      cursor:pointer;
      p{
        padding-top: 15px;
        padding-left: 20px;
      }
      .inside{
        font-size: 25px;
        display: flex;
        img{
          scale: 0.25;
        }
      }
    }
    .tokusyu{
      background-color: #FF4E00;
    }
  }
}
</style>

<script>
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
