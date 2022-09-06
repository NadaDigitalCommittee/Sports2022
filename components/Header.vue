<template>
    <div>
    <div class="header">
        <p>header will be here</p>
    </div>
    <div class="blank">

    </div>
    </div>
</template>

<style scoped>
.header{
    position: fixed;
    height: 100px;
    width: 100vw;
    background-color: aqua;
    z-index: 1000;
}
.blank{
    height: 100px;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>
