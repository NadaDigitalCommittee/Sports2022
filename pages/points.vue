<template>
    <div>
        <Header/>
        <!--合計得点-->
        1組, 2組, 3組, 4組
        <!-- pointIsHiddenがtrueなら???を表示 -->
        <div v-if="!sum.pointIsHidden">
          {{sum.scores[0]}}, {{sum.scores[1]}}, {{sum.scores[2]}}, {{sum.scores[3]}}
        </div>
        <div v-else>
          ???, ???, ???, ???
        </div>

        <!--詳細(時間があれば)-->
        <table>
          <tr>
            <td>競技</td>
            <td>1組</td>
            <td>2組</td>
            <td>3組</td>
            <td>4組</td>
          </tr>
          <tr v-for="point in points" :key="point.id">
            <!-- 競技名 -->
            <td>{{point.name}}</td>

            <!-- 1組(confirmがfalseなら-を表示、pointIsHiddenがtrueなら??を表示) -->
            <td v-if="!point.confirm">-</td>
            <td v-else-if="point.pointIsHidden">??</td>
            <td v-else>{{point.score1}}</td>

            <!-- 他も同じ -->
            <td v-if="!point.confirm">-</td>
            <td v-else-if="point.pointIsHidden">??</td>
            <td v-else>{{point.score2}}</td>

            <td v-if="!point.confirm">-</td>
            <td v-else-if="point.pointIsHidden">??</td>
            <td v-else>{{point.score3}}</td>

            <td v-if="!point.confirm">-</td>
            <td v-else-if="point.pointIsHidden">??</td>
            <td v-else>{{point.score4}}</td>
          </tr>
          <tr v-if="!sum.pointIsHidden">
            <td>合計</td>
            <td>{{sum.scores[0]}}</td>
            <td>{{sum.scores[1]}}</td>
            <td>{{sum.scores[2]}}</td>
            <td>{{sum.scores[3]}}</td>
          </tr>
          <tr v-else>
            <td>合計</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
            <td>???</td>
          </tr>
        </table>
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
      sum: { scores: [0, 0, 0, 0], pointIsHidden: true },
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
  mounted() {
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
