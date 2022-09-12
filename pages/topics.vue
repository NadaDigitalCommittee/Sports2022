<template>
    <div>
        <Header/>
    </div>
</template>

<style>

</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'topics',
  data() {
    return {
    };
  },
  head(){
    let url = 'https://sports.nada-sc.jp/2022/';
    
    return{
      title:'記事特集 - 第93回灘校体育祭「拓」',
      meta:[
      { hid: 'description',name:'description',content:'2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。'},
      { hid: 'og:description',name:'og:description',content:'2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。'},
      { hid: 'og:url', name:'og:url',content:url+'topics'}  
      ],
    }
  },
  methods: {
  },
});
</script>
