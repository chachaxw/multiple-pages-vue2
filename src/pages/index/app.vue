<template>
  <div class="container">
    <h1>Multiple Pages Front-end Project-Home</h1>
    <index-hello></index-hello>
  </div>
</template>

<script>
  import indexHello from 'components/home/index-hello';
  export default {
    name: 'app',
    components: { indexHello }
  };
</script>

<style>
  @import "../../sass/common.scss";
</style>
