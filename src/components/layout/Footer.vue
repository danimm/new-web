<template lang="pug">
  footer.footer
    .content
      .columns
        .column
          h4.subtitle {{ $t('footer.title') }}
          p {{ $t('footer.text1') }}
          p {{ $t('footer.text2') }}
            a(:href="`mailto:${mail}`") info@danimm.com
          a.is-link(href="https://www.linkedin.com/in/daniel-mm/" target="_blank")
            img(src="@/assets/footer-icons/linkedin.svg")
          a.is-link(href="https://github.com/danimm" target="_blank")
            img(src="@/assets/footer-icons/github-logo.svg")
          a.is-link(href="https://twitter.com/Danimm_dev" target="_blank")
            img(src="@/assets/footer-icons/twitter-logo.svg")
            
        .column
          table.table
            tbody
              tr
                td.has-text-centered-mobile
                  router-link(to="/") {{ $t('footer.navbar.home') }}
              tr
                td.has-text-centered-mobile
                  router-link(to="about") {{ $t('footer.navbar.about') }}
              tr
                td.has-text-centered-mobile
                  router-link(to="portfolio") {{ $t('footer.navbar.portfolio') }}
              tr
                td.has-text-centered-mobile
                  router-link(to="skills") {{ $t('footer.navbar.skills') }}
              tr
                td.has-text-centered-mobile
                  router-link(to="cv") {{ $t('footer.navbar.cv') }}

      .content.has-text-centered
        p {{ $t('footer.created') }}
</template>

<script>
export default {
    data() {
        return {
            mail: "info@danimm.com"
        };
    }
};
</script>

<style scoped>
table {
    background-color: transparent;
}
a.is-link {
    padding-right: 20px;
}
a.is-link img {
    height: 40px;
}
</style>