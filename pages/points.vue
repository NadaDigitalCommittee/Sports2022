<template>
    <div>
        <Header/>
        <div v-for="point in points" :key="point.id"><p>{{point.id}}{{point.name}}{{point.score1}}{{point.score2}}{{point.score3}}{{point.score4}}{{point.conceal}}</p></div>
        <div class="aqua" @click = 'request'>request</div>
    </div>
</template>

<style scoped>
.aqua{
  background-color: aqua;
}

</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'points',
  data() {
    return {
      points:[],
    };
  },
  head(){
    let url = 'https://sports.nada-sc.jp/2022/';
    
    return{
      title:'競技得点 - 第93回灘校体育祭「拓」',
      meta:[
      { hid: 'description',name:'description',content:'2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。'},
      { hid: 'og:description',name:'og:description',content:'2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。'},
      { hid: 'og:url', name:'og:url',content:url+'points'}  
      ],
    }
  },
  methods: {
    async request(){
      // @ts-ignore
      this.points = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/score',{headers: { "Content-Type": "application/json" },
    data: {}}));
    },
  },
});
</script>
