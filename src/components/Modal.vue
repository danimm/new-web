<template lang="pug">
  .container-fluid
    p this is a modal
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container-fluid {
    z-index: 10;
      /* width: 90vw;
      height: 90vh; */
    background-color: lightcoral;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }  
</style>