<template>
  <div class="container">
    <div class="background-img">
      <div class="background-layout"></div>
    </div>
    <div class="content">
      <h1>Multiple Pages Front-end Project-Home</h1>
      <p v-text="hello"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        hello: 'Hello, this is a vue project.'
      };
    }
  };
</script>

<style lang="scss">
  @import "../../sass/common.scss";
</style>
