<template lang="pug">
  footer.footer
    .content
      .columns
        .column
          h4.subtitle Thank you for your visit!
          p The purpose of this website is to have all my personal projects and knowledge in one place.
          p If you have any questions write me to: 
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
                  router-link(to="/") Home
              tr
                td.has-text-centered-mobile
                  router-link(to="about") About
              tr
                td.has-text-centered-mobile
                  router-link(to="portfolio") Portfolio
              tr
                td.has-text-centered-mobile
                  router-link(to="skills") Skills
              tr
                td.has-text-centered-mobile
                  router-link(to="cv") CV

      .content.has-text-centered
        p Created by Daniel Muñoz Martín
</template>

<script>
  export default {
    data() {
      return {
        mail: 'info@danimm.com'
      }
    }
  }
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