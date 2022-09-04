<!-- 全てのページで使われるレイアウト -->
<template>
  <!-- CSS Modules内のクラスを付与するときは :class="$style.***" とする -->
  <div :class="$style.container">
    <div :class="$style.main">
      <!-- ここが中身 -->
      <nuxt />
    </div>
    <!-- フッター -->
    <footer :class="$style.footer">
      <div :class="$style.names">
        <p :class = "$style.name">93rd Nada Sports Fest</p>
        <p :class="$style.copyright">©︎Copyright 2022 Digital Division</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout',
});
</script>

<!-- SCSS + CSS Modulesでスタイルを記述する -->
<style lang="scss" module>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: $color-background;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-grow: 1;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
  white-space: nowrap;
  color: $color-text-dimmed;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #45485a;
  a {
    color: inherit;
  }
}

.names {
  p{
  text-align: center;
  color: #FFFFFF;
  }
}
.name{
  font-size: 15px;
}
.copyright{
  font-size: 7px;
}
</style>
<!-- CSS Modulesを無効化したSCSS -->
<style lang="scss">
/* 自分自身を指すnuxt-linkにはnuxt-link-exact-active属性が付くので,
 * これを無効化する
 */
.nuxt-link-exact-active {
  pointer-events: none;
  opacity: 0.7;
}
</style>
