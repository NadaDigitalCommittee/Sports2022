<template>
    <div>
        <Header/>
        <div class="main">
          <p class="midasitext title"><span class="changecolor">競</span>技得点</p>
          <div class="background">
            <img class="background_img" src="~/assets/img/points_background.png" alt="競技得点"/>
            <div class="class1 class_">
              <div v-if="!sum.pointIsHidden">{{sum.scores[0]}}</div>
              <div v-else>???</div>
            </div>
            <div class="class2 class_">
              <div v-if="!sum.pointIsHidden">{{sum.scores[1]}}</div>
              <div v-else>???</div>
            </div>
            <div class="class3 class_">
              <div v-if="!sum.pointIsHidden">{{sum.scores[2]}}</div>
              <div v-else>???</div>
            </div>
            <div class="class4 class_">
              <div v-if="!sum.pointIsHidden">{{sum.scores[3]}}</div>
              <div v-else>???</div>
            </div>
          </div>
        </div>

        <!--詳細(時間があれば)-->
        <!-- コメントを外す場合は下のコメントの残骸の前後についてる@を外すこと
        <table>
          <tr>
            <td>競技</td>
            <td>1組</td>
            <td>2組</td>
            <td>3組</td>
            <td>4組</td>
          </tr>
          <tr v-for="point in points" :key="point.id">
            <@!-- 競技名 --@>
            <td>{{point.name}}</td>

            <@!-- 1組(confirmがfalseなら-を表示、pointIsHiddenがtrueなら??を表示) --@>
            <td v-if="!point.confirm">-</td>
            <td v-else-if="point.pointIsHidden">??</td>
            <td v-else>{{point.score1}}</td>

            <@!-- 他も同じ --@>
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
        -->
    </div>
</template>

<style scoped lang = "scss">
  .midasitext{
    
    font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 40px;
    .changecolor{
      color: #FF4E00;
    }
  }
.main {
  width: 100vw;
  margin: 20px 0 20px;
}

.title {
  width: 160px;
  margin-left: 10%;
  margin-bottom: 20px;
}

.background{
  position: relative;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.background_img{
  width: 100%;
}

.class_{
  color: #ffffff;
  font-size: 30px;
  position: absolute;
  font-family: "DIN 2014";
  font-style: "Narrow Bold";
  font-weight: 900;
  transform: translate(-50%,-50%);
}
.class1{
  left: 25%;
  top: 30%;
}
.class2{
  left: 75%;
  top: 30%;
}
.class3{
  left: 25%;
  top: 80%;
}
.class4{
  left: 75%;
  top: 80%;
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
