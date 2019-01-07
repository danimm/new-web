<template lang="pug">
  #app
    dm-header
    router-view
    dm-footer

</template>

<script>
  import DmHeader from '@/components/layout/Header.vue'
  import DmFooter from '@/components/layout/Footer.vue'

  export default {
    components: { DmHeader, DmFooter }
  }
</script>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';
</style>
