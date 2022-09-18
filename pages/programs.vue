<template>
    <div>
        <Header/>
        <ul>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
          <li><span class="num">(1)</span><span class="name">aaa</span></li>
        </ul>
    </div>
</template>

<style>

.num {
  color: orange;
  font-size: 20px;
  font-family: din-2014, sans-serif;
  font-weight: 400;
  font-style: normal;
}
.name {
  font-size: 20px;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'programs',
  data() {
    return {
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
  methods: {
  },
});
</script>
