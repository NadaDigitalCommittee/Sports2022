<template>
    <div>
        <Header/>
        <p v-for="point in points" :key="point">{{point}}</p>
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
  methods: {
    async request(){
      this.points = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/score',{headers: { "Content-Type": "application/json" },
    data: {}}));
    },
  },
});
</script>
