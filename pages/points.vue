<template>
    <div>
        <Header/>
        <!--後は下をいいように弄って-->
        <table v-for="point in points" :key="point.id">
          <tr>
            <td>
              {{point.id}}
            </td>
            <td>
              {{point.name}}
            </td>
            <td>
              {{point.score1}}
            </td>
            <td>
              {{point.score2}}
            </td>
            <td>
              {{point.score3}}
            </td>
            <td>
              {{point.score4}}
            </td>
            <td>
              {{point.year}}
            </td>
            <td>
              {{point.confirm}}
            </td>
          </tr>
        </table>
        <div class="aqua" @click = 'request'>request</div>
        <p>{{sum[0]}},{{sum[1]}},{{sum[2]}},{{sum[3]}}</p>
        <div class="aqua" @click = 'requestsum'>requestsum</div>
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
      points: [],
      sum:[],
    };
  },
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: '競技得点 - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: `${url}points` },
      ],
    };
  },
  mounted(){
    this.request();
    this.requestsum();
  },
  methods: {
    async request() {
      // @ts-ignore
      this.points = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/score', {
        headers: { 'Content-Type': 'application/json' },
        data: {},
      }));
    },
    async requestsum() {
      // @ts-ignore
      this.sum = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/sum', {
        headers: { 'Content-Type': 'application/json' },
        data: {},
      }));
    },
  },
});
</script>
