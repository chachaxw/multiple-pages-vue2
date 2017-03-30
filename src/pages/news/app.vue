<template>
  <div class="container">
    <div class="background-img">
      <div class="background-layout"></div>
    </div>
    <div class="content">
      <h1>Multiple Pages Front-end Project-News</h1>
      <NewsHello />
    </div>
  </div>
</template>

<script>
  import NewsHello from 'components/news/news-hello';

  export default {
    name: 'app',
    components: { NewsHello }
  };
</script>

<style lang="scss">
  @import "../../sass/common.scss";
</style>
