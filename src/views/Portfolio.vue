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
export default {
    data() {
        return {
            projects: [
                {
                    title: "Huetor",
                    description:
                        "This is a web-project for a lodgings company using Responsive Design, Vue.js, Vue-Router and i18n(internationalization).",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fhuetor.png?alt=media&token=b40bd8a7-f72f-4109-a87c-97f2e27127db",
                    url: "https://www.alojamientoshuetor.com/"
                },
                {
                    title: "LaraFoto",
                    description:
                        "This is a web-project using Laravel with MySQL for create a Social Network like Instagram.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2FLarafoto.png?alt=media&token=af779818-471f-42c0-be6a-63d554772666"
                    // url: ""
                },
                {
                    title: "Vue Music",
                    description:
                        "Final project of the Vue.js course in Platzi.com, in which we use the Spotify API to make an online music player.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fvuemusic.png?alt=media&token=3f779d1f-37fc-4459-a301-33a0ad66ecd3",
                    url: "http://vue-music.now.sh"
                    // https://github.com/danimm/Curso-Profesional-Vuejs/tree/master/Vue%20Profesional/vue-music
                },
                {
                    title: "Memory game",
                    description:
                        "This project is a game to memorize colours using only Javascript. Only for desktop.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fcolors.png?alt=media&token=ed8b906f-c575-42a8-8b0f-ccc17a342e0b",
                    url: "http://mycolors.surge.sh/"
                },
                {
                    title: "Last.fm",
                    description:
                        "In this simple project to show a small list of artists using the last fm API.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fvuebasic.png?alt=media&token=7c2a3e7b-f12f-4b16-94f1-cf87a96c51c0",
                    url: "http://vue-basic.surge.sh"
                },
                {
                    title: "Local Storage",
                    description:
                        "This is a project using the local storage to create a list of tasks.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fvuelocalstorage.png?alt=media&token=bb8695e1-3d18-4a54-b58e-f5398131f24d",
                    url: "http://vue-local-storage.surge.sh"
                },
                {
                    title: "Memory game",
                    description:
                        "This project is a game to memorize letters using only Javascript. Only for desktop.",
                    src:
                        "https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fvuememory.png?alt=media&token=9ee36c3a-8b86-4d93-9425-20e3cea9b395",
                    url: "http://vue-memory.surge.sh"
                },
                {
                    title: "Responsive Grid",
                    description:
                        "Check responsive design with Grid layout from CSS3, just awesome !!",
                    src:
                        "https://i.pinimg.com/564x/96/c6/3e/96c63e77096f8af8964cfcbb47c3df23.jpg",
                    url: "http://grid-example.surge.sh/"
                }
            ]
        };
    }
};
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