<template lang="pug">
  nav(class="navbar is-light"
      role="navigation"
      arial-label="main navigation")
    .navbar-brand
      router-link.navbar-item(to="/")
        img(src="@/assets/logo/Logo_largo.svg")
      a.navbar-burger(
        :class="{ 'is-active': isOpen }"
        role="button"
        arial-label="menu"
        aria-expanded="flase"
        @click="openMenu"
        )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(
      :class="{ 'is-active': isOpen === true }"
      @focusout="closeMenu")
      .navbar-end(@click="closeMenu")
        router-link.navbar-item(to="/") Home
        router-link.navbar-item(
          @click="closeMenu" 
          to="about") About
        router-link.navbar-item(
          @click="closeMenu"
          to="portfolio") Portfolio
        router-link.navbar-item(to="skills") Skills
        router-link.navbar-item(to="cv") CV
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link(href="#") Languages
          .navbar-dropdown.is-boxed
            a.navbar-item(href="#") 🇪🇸 Español
            a.navbar-item(href="#") 🇬🇧 Is Coming!
            a.navbar-item(href="#") 🇩🇪 Is Coming!
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
</style>