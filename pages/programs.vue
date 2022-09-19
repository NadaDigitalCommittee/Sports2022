<template>
    <div>
        <Header/>
        <img src="~/assets/img/program.png" class="pic">
        <h1 class="midasi">午前の部</h1>
        <div>
          <ul v-for="program in programs" :key="program.id">
            <li>
              <span class="num">({{program.id}})</span>
              <span class="honbun">【
              <span v-if="program.year===0">中１</span>
              <span v-if="program.year===1">中２</span>
              <span v-if="program.year===2">中３</span>
              <span v-if="program.year===3">高１</span>
              <span v-if="program.year===4">高２</span>
              <span v-if="program.year===5">高３</span>
              <span v-if="program.year===6">中学</span>
              <span v-if="program.year===7">高校</span>
              <span v-if="program.year===8">全体</span>
              <span v-if="program.year===9">応援団</span>
              <span v-if="program.year===10">クラブ</span>
              】&emsp;<span v-if="program.year<9">&emsp;</span>{{program.name}}</span>
              <img src="~/assets/img/yajirusi2.png" class="yajirusi">
            </li>
            <p class="midasi" v-if="program.id===15">午後の部</p>
          </ul>
        </div>
    </div>
</template>

<style scoped>
.pic {
  width: 10em;
}
.num {
  color: #FF4E00;
  font-size: 17px;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  width: 2em;
}
.yajirusi {
  width: 11px;
  display: inline-block;
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
}
.honbun {
  font-family: yu-gothic-pr6n, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 3em;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'programs',
  data() {
    return {
      programs: [],
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
  mounted(){
    this.request();
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
  },
});
</script>
