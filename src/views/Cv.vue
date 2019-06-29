<template lang="pug">
  .grid.container
    .content.titulo
      h3.is-1.title Daniel Muñoz Martín
      h4.is-3.subtitle {{ $t('cv.subtitle')}}
    .content.img-container
      img.foto(src="@/assets/daniel.jpg")
    .content.description
      .notification
        p {{ $t('cv.notification')}}
          a.button.is-link(href="mailto:info@danimm.com") {{ $t('cv.button')}}
    .content.about
      h3.subtitle.is-3 {{ $t('cv.about')}}
      p {{ $t('cv.text1')}}
      p {{ $t('cv.text2')}}
    .content.formation
      h3.title.is-3 {{ $t('cv.formation.title')}}
      .content
        p.title {{ $t('cv.formation.formation1.title')}}
      p {{ $t('cv.formation.formation1.duration')}}
      p {{ $t('cv.formation.formation1.text')}} 
        a(href="https://platzi.com/@danimm/" target="_blank").is-link ➡️ https://platzi.com/@danimm
      .content
        p
          strong HTML5 / CSS3:
        p Responsive Design,Bulma,MaterializeCSS,Bootstrap,Foundation,Pug,SASS/Stylus,CSS-Grid,PostCSS
        p
          strong DevTools:
        p Webpack, Git/ GitHub, Sketch, NPM / Yarn, ESLint, Now, VSCode
        p
          strong Javascript:
        p ES6,Babel,VueJS,React,JSX/Style JSX,Single Page Application(SPA),Server/Client Side Render(SSR/CSR),Vue-Router,i18n(internationalization)
        p
          strong Backend:
        p   Firebase, PHP, Laravel, Blade, SQL, MySQL, PHPMyAdmin
      .content
        p.title {{ $t('cv.formation.formation1.studium.title')}} 
        p {{ $t('cv.formation.formation1.studium.where')}}
        p {{ $t('cv.formation.formation1.studium.certificate')}}
    .content
      h3.title.is-3 {{ $t('cv.skills.title')}} 
      .skills
        .content
          p HTML5
          p CSS3
          p Javascript
        .content
          progress.progress.is-success(value="80" max="100")
          progress.progress.is-success(value="70" max="100")
          progress.progress.is-success(value="50" max="100")
    .content.language
      h3.title.is-3 {{ $t('cv.languages.title') }}
      .skills
        .left-side
          p Spanish
          p German
          p English
        .right-side
          progress.progress.is-success(value="100" max="100")
          progress.progress.is-success(value="60" max="100")
          progress.progress.is-success(value="40" max="100")
    .content.work
      h3.title.is-3 {{ $t('cv.work.title') }}
      strong Inventur Team
      p SPAR HANDELS AG | 2014 - currently
      strong Hardware-Techniker
      p X-TROM (Spanien) | 2012 - 2013
    .content.references
      h3.title.is-3 {{ $t('cv.references') }}
      .content
        p Monika Graf
        p SPAR Team Leiterin
        p +41 79 833 69 19
        p monika.graf@spar.ch
      .content
        p Maria Tobler
        p CEO Tobler Management
        p +41 43 818 96 80
        p maria.tobler@toblermanagement.ch
</template>

<script>
export default {};
</script>

<style scoped>
p {
    font-size: 1.2em;
}
.card {
    padding: 20px;
}
.grid {
    display: grid;
    grid-gap: 20px;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr 300px;
}
.titulo {
    grid-column: 1 / span 2;
    text-align: end;
    padding-right: 40px;
}
h3,
h4 {
    color: #374f75;
}
.description {
    grid-column: span 2;
    padding: 10px;
}
.about {
    grid-row: span 2;
    grid-column: 3;
}
.img-container {
    grid-row: span 2;
    display: flex;
    justify-content: center;
}
.img-container img {
    border: 2px solid #374f75;
    /* border-radius: 50%; */
    object-fit: cover;
    height: 380px;
    width: 100%;
}
.formation {
    grid-column: span 2;
}
.formation strong {
    text-decoration: underline;
}
.work {
    grid-column: 1;
}
.skills {
    display: grid;
    grid-template-columns: 120px 1fr;
}
.skills p {
    /* text-align: right; */
    margin-right: 5px;
    text-decoration: underline;
}
.skills progress {
    margin-top: 5px;
    width: 300px;
}
.references {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.references h3 {
    grid-column: span 2;
}
.contacto {
    grid-column: span 3;
    display: flex;
    justify-content: space-between;
}
.button {
    margin-left: 10px;
}

@media screen and (max-width: 1280px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "titulo titulo"
            "about img-container"
            "skills languages"
            "formation formation"
            "references work";
    }
    .img-container {
        grid-area: img-container;
        width: 300px;
        height: 80%;
    }
    .description {
        display: none;
    }
    .titulo {
        grid-area: titulo;
        text-align: center;
    }
    .about {
        grid-area: about;
    }
    .formation {
        grid-area: formation;
    }
    .work {
        grid-area: work;
    }
    .references {
        grid-area: references;
        display: flex;
        flex-direction: column;
    }
}
@media screen and (max-width: 1088px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "titulo titulo"
            "about about"
            "formation formation"
            "skills languages"
            "work references";
        margin: 30px;
    }
    .img-container {
        display: none;
    }
}
@media screen and (max-width: 1088px) {
    .grid {
        grid-template-areas:
            "titulo titulo"
            "about about"
            "formation formation"
            "skills languages"
            "work ."
            "references references";
    }
    .work {
        display: flex;
        flex-direction: column;
    }
    .references {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 920px) {
    .formation {
        display: flex;
        flex-direction: column;
    }
    .grid {
        grid-template-columns: 1fr;
        grid-template-areas:
            "titulo"
            "about"
            "formation"
            "skills"
            "languages"
            "work"
            "references";
    }
    .references {
        display: flex;
        flex-direction: column;
    }
}
@media screen and (max-width: 610px) {
    .grid {
        margin: 5px;
    }
    .content {
        width: 100%;
        word-wrap: break-word;
    }
}
@media screen and (max-width: 515px) {
    .grid {
        /* background-color: lightblue; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    p,
    h3,
    h4,
    strong {
        /* padding-left: 5%;
      padding-right: 5%; */
        padding: 5px;
    }
    .content {
        margin: 0 auto;
    }
    .references {
        display: flex;
        flex-direction: column;
    }
    .formation {
        display: flex;
        flex-direction: column;
    }
    progress {
        max-width: 60%;
    }
}
</style>