<template>
  <div class="container">
    <h1>Multiple Pages Front-end Project</h1>
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
  .container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: fantasy;
    transform: translate(-50%, -50%);
  }
</style>
