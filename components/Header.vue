<template>
    <div>
    <div class="header">
        <div @click="$router.push('/')" class="totop">第93回灘校体育祭</div>
        <div class="hb" v-on:click="hbClick">
            <img :src="imgsrc" alt="">
        </div>
    </div>
    <div class="blank"></div>
    <div class="menu" :class="{ActivateMenu:MenuOpened}">
      <div class="link">
        <nuxt-link to="/">トップページ</nuxt-link>
      </div>
      <div class="link">
        <nuxt-link to="/programs">プログラム</nuxt-link>
      </div>
      <div class="link">
        <nuxt-link to="/points">競技得点</nuxt-link>
      </div>
      <div class="link">
        <nuxt-link to="/articles">記事特集</nuxt-link>
        <div class="sorezore">
          <nuxt-link to="/article/lead">体育委員会 引率課<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/judge">体育委員会 審判課<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/delivery">体育委員会 運搬課<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/design">体育委員会 デザイン課<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/field">体育委員会 フィールド課<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/sumo">相撲特集<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
        <div class="sorezore">
          <nuxt-link to="/article/cheer">応援団特集<img src="~/assets/img/yajirusi2.svg" alt=""></nuxt-link>
        </div>
      </div>
    </div>
    </div>
</template>

<style  lang = "scss" scoped>

.header{
    position: fixed;
    height: max(50px,10vh);
    width: 100vw;
    background-color: #FFFFFF;
    z-index: 1000;
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    display: flex;
    font-size: 20px;
    align-items: center;
    border-color: $maincolor;
    //border-bottom-width: 1px;
    .totop{
        position: absolute;
        left: calc( max( 0px , calc( 15vw - 50px )) + 10px);
        cursor: pointer;
    }
    .hb{
        position: absolute;
        right: calc( max( 0px , calc( 15vw - 50px )) + 10px);
        img{
          width: 37px;
          height:20px;
        }
        cursor: pointer;
    }
}
.blank{
    height: max(50px,10vh);
}
.menu{
  position: fixed;
  top:max(50px,10vh);
  z-index: 999;
  background-color: #FFFFFF;
  width: 100vw;
  height: calc(100vh - max(50px,10vh));
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.ActivateMenu{
    pointer-events: all;
    opacity: 1;
}

.link{
  color:$maincolor;
  border-bottom-width: 1px;
  margin: 0 10vw;
  padding: 3vh 10vw;
  border-color: #0000004a;
  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 20px;
}
.sorezore{
  font-size: 15px;
  font-family: toppan-bunkyu-gothic-pr6n,serif;
  font-weight: 400;
  font-style: normal;
  color: #000000;
  margin: 12px 0;
  img{
    position: relative;
    width: 12px;
    top: -3px;
    left: 6px;
  }
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      MenuOpened: false,
      imgsrc: require('~/assets/img/menuclosed.svg'),
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
    hbClick() {
      this.MenuOpened = !this.MenuOpened;
      this.imgsrc = this.MenuOpened ? require('~/assets/img/menuopened.svg') : require('~/assets/img/menuclosed.svg');
    },
  },
});
</script>
