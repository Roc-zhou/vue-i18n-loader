<template>
  <div id="app" >
    <!-- TODO -->
    <img src="./assets/logo.png"><br>
    <span @click.stop="$i18n.locale==='EN' ? $i18n.locale='CN' : $i18n.locale= 'EN';">切换语言</span>
    <span @click="go">hello</span>
    <span @click="go1">lan</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go() {
      this.$router.push({
        name:'HelloWorld',
      })
    },
    go1() {
      this.$router.push({
        name:'this',
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
