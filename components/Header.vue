<template>
    <div>
    <div class="header">
        <b>第93回灘校体育祭</b>
        <div class="hb" v-on:click="hbClick">
            <img :src="imgsrc" alt="">
        </div>
    </div>
    <div class="blank">

    </div>
    <div class="menu" :class="{ActivateMenu:MenuOpened}">

    </div>
    </div>
</template>

<style  lang = "scss" scoped>
.header{
    position: fixed;
    height: 100px;
    width: 100vw;
    background-color: #FFFFFF;
    z-index: 1000;
    font-size:20px;
    display: flex;
    align-items: center;
    border-color: $maincolor;
    border-bottom-width: 1px;
    b{
        position: absolute;
        left: calc( max( 0px , calc( 15vw - 50px )) + 10px);
    }
    .hb{
        position: absolute;
        right: calc( max( 0px , calc( 15vw - 50px )) + 10px);
    }
}
.blank{
    height: 100px;
}
.menu{
  position: fixed;
  z-index: 999;
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.ActivateMenu{
    pointer-events: all;
    opacity: 1;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data(){
    return{
      MenuOpened:false,
      imgsrc:require("~/assets/img/menuclosed.png"),
    };
  },
  methods:{
    hbClick(){
        this.MenuOpened = !this.MenuOpened;
        this.imgsrc=this.MenuOpened?require("~/assets/img/menuopened.png"):require("~/assets/img/menuclosed.png");
    },
  }
});
</script>
