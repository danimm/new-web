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
        router-link.navbar-item(to="/") {{ $t('header.navbar.home') }}
        router-link.navbar-item(
          @click="closeMenu" 
          to="about") {{ $t('header.navbar.about') }}
        router-link.navbar-item(
          @click="closeMenu"
          to="portfolio") {{ $t('header.navbar.portfolio') }}
        router-link.navbar-item(to="skills") {{ $t('header.navbar.skills') }}
        router-link.navbar-item(to="cv") {{ $t('header.navbar.cv') }}
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link(href="#") {{ $t('header.navbar.languages.title') }}
          .navbar-dropdown.is-boxed
            a.navbar-item(@click="selectLang('es')") {{ $t('header.navbar.languages.spanish') }}
            a.navbar-item(@click="selectLang('en')") {{ $t('header.navbar.languages.english') }}
            a.navbar-item(@click="selectLang('de')") {{ $t('header.navbar.languages.german') }}
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        selectLang(lang) {
            this.$i18n.locale = lang;
            console.log(this.$i18n);
        },
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