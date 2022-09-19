<template>
    <div>
        <Header/>
        <img src="~/assets/img/program.png" class="midasi">
        <div>
          <ul v-for="program in programs" :key="program.id">
            <li class="programlist">
              <span class="num">({{program.id}})</span>
              【<span v-if="program.year===0">中１</span><span v-if="program.year===1">中２</span><span v-if="program.year===2">中３</span><span v-if="program.year===3">高１</span><span v-if="program.year===4">高２</span><span v-if="program.year===5">高３</span><span v-if="program.year===6">中学</span><span v-if="program.year===7">高校</span><span v-if="program.year===8">全体</span>】&emsp;&emsp;{{program.name}}
              <img src="~/assets/img/yajirusi2.svg" class="yajirusi">
            </li>
          </ul>
        </div>
    </div>
</template>

<style scoped>
.programlist {
  display: flex;
  align-items: center;
}
.num {
  color: orange;
  font-size: 20px;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  width: 3em;
}
.yajirusi {
  width: 15px;
  margin-left: 5px;
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
