<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <mail-detail v-bind:url="url"></mail-detail>
  </div>
</template>

<script>
import MailDetail from './components/MailDetail';

export default {
  name: 'app',
    data() {
        return {
            url : "",
        }
    },
  components: {
      MailDetail,
      'mail-detail': MailDetail,
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
