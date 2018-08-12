<i18n>{
  "CN": {
  "title": ["这是另一个"]
  },
  "EN": {
  "title": ["this is a"]
  },
  "JA": {
  "title": []
  },
  "KO": {
  "title": []
  }}
</i18n>
<template>
  <div class="hello">

    <h1>{{ $t('title[0]') }}</h1>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
