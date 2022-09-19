<template>
    <div>
      <Header/>
      <div class="main">
        <img class="title" src="~/assets/img/program.png">
        <h1 class="midasi">午前の部</h1>
        <ul>
          <li v-for="program in programs" :key="program.id">
            <div class="item" @click="openDesc(program)">
              <span class="num">({{program.id}})</span>
              <span class="honbun year">【{{years[program.year]}}】</span>
              <span class="honbun">{{program.name}}</span>
              <img src="~/assets/img/yajirusi2.svg" class="yajirusi">
            </div>
            <p class="midasi" v-if="program.id===15">午後の部</p>
          </li>
        </ul>
      </div>
      <div class="descbox" v-if="active">
        <div class="descshadow" v-if="active" @click="closeDesc()" />
        <div class="desc">
          <h2 class="desctitle">{{active.name}}</h2>
          <h2 class="desctext">{{active.description}}</h2>
          <div class="descbtn" @click="closeDesc()">閉じる</div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.main {
  width: 100vw;
  margin: 20px 0 20px;
}

.title {
  margin-left: 30px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  padding: 15px 30px;
}

.item:hover {
  background-color: #f9f9f9;
}

.num {
  color: #FF4E00;
  font-size: 1.1rem;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  width: 2em;
}

.yajirusi {
  width: 13px;
  display: inline-block;
  margin-left: 7px;
  margin-bottom: 2px;
}

.midasi {
  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
  background-color: #FF4E00;
  color: white;
  text-align: center;
  height: 3em;
  line-height: 3em;
  margin-bottom: 20px;
}

.honbun {
  font-family: yu-gothic-pr6n, sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  font-style: normal;
  /* line-height: 1.5em; */
  margin-left: 5px;
}

.year {
  width: 5em;
}

.descbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
}

.descshadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 85%;
  max-width: 30rem;
  background-color: #ffffff;
  padding: 20px;
  z-index: 1002;
}

.desctitle {
  font-family: "Yu Gothic", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  margin: 10px;
}

.desctext {
  width: 95%;
  font-family: yu-gothic-pr6n, sans-serif;
  font-style: normal;
  font-size: 0.9rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.75em;
}

.descbtn {
  font-family: yu-gothic-pr6n, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  background-color: #FF4E00;
  padding: 7px 20px;
  margin-top: 30px;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'programs',
  data() {
    return {
      programs: [],
      active: null,
      years: [
        '中1',
        '中2',
        '中3',
        '高1',
        '高2',
        '高3',
        '中学',
        '高校',
        '全体',
        '応援団',
        'クラブ',
      ],
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: 'プログラム - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}programs` },
      ],
    };
  },
  async mounted() {
    await this.request();

    (function(d) {
      var config = {
        kitId: 'sfd2bxu',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
    (function(d) {
    var config = {
      kitId: 'sfd2bxu',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  },
  methods: {
    async request() {
      // @ts-ignore
      this.programs = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/score', {
        headers: { 'Content-Type': 'application/json' },
        data: {},
      }));
    },
    openDesc(program: object) {
      // @ts-ignore
      this.active = program;
    },
    closeDesc() {
      // @ts-ignore
      this.active = null;
    },
  },
});
</script>
