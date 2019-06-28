<template lang="pug">
  section.hero.is-fullheight.is-bold.is-light
    .hero-body
      .container.has-text-centered
        h1.title Daniel Muñoz Martín
        h2.subtitle {{ $t('home.subtitle') }}
        .content
          p {{ $t('home.content') }}
</template>

<style lang="scss" scoped>
// @ is an alias to /src
.title {
    font-size: 4em;
}

.subtitle {
    font-size: 2.5em;
}
</style>
