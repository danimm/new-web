<template lang="pug">
  .containerr
    a.card(
      v-for="(p, index) in projects"
      :href="p.url"
      target="_blank"
    )
      .card-image
        figure.image.is-4by1
          img(:src="p.src")
      .card-content
        .media-content
          p.title {{ p.title }}
        .content {{ p.description }}


</template>

<script>
  import img1 from '@/assets/images/vuemusic.png';
  import img2 from '@/assets/images/vuebasic.png';
  import img3 from '@/assets/images/vuelocalstorage.png';
  import img4 from '@/assets/images/vuememory.png';
  import img5 from '@/assets/images/colors.png';
  export default {
    data() {
      return {
        projects: [
          {
            title: 'Vue Music',
            description: 'Final project of the Vue.js course in Platzi.com, in which we use the Spotify API to make an online music player.',
            src: img1,
            url: 'http://vue-music.now.sh'
          },
          {
            title: 'Last.fm',
            description: 'In this simple project to show a small list of artists using the last fm API.',
            src: img2,
            url: 'http://vue-basic.surge.sh'
          },
          {
            title: 'Memory game',
            description: 'This is a project using the local storage to create a list of tasks.',
            src: img3,
            url: 'http://vue-local-storage.surge.sh'
          },
          {
            title: 'Memory game',
            description: 'This project is a game to memorize letters using only Javascript. Only for desktop.',
            src: img4,
            url: 'http://vue-memory.surge.sh'
          },
          {
            title: 'Memory game',
            description: 'This project is a game to memorize colours using only Javascript. Only for desktop.',
            src: img5,
            url: 'http://mycolors.surge.sh/'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .containerr {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
    align-items: flex-start;
    justify-content: center;
  }
  .card {
    margin: 20px;
  }


</style>