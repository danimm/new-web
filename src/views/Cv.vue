<template lang="pug">
  .grid.container
    .content.titulo
      h3.is-1.title Daniel Muñoz Martín
      h4.is-3.subtitle Frontend Developer
    .content.img-container
      img.foto(src="@/assets/daniel.jpg")
    .content.description
      .notification
        p This is just a small version using only CSS. It's not Responsive yet
        p If you want to see the complete pdf version, write me an email.
          a.button.is-link(href="mailto:info@danimm.com") Email me!
    .content.description-right
      h3.subtitle.is-3 About me
      p I am a curious, hard-working and ambitious person who pays attention to the small details. I am into the Frontend development world since 2016.
      p In addition I study on a daily basis using an online course format the new platform technologies, in order to be up to date regarding the new frameworks and skills that are used and demanded by the companies nowadays.
    .content.ausbildung
      h3.title.is-3 Formation
      .content
        p.title Frontend web developer
      p platzi.com | 2016 - currently
      p Platzi is one of the best online platforms worldwide. They have more than 700,000 students from all over the world. Visit my profile to see a little more about my knowledge. ➡️ 
        a(href="https://platzi.com/@danimm/" target="_blank").is-link https://platzi.com/@danimm
      .content
        p
          strong HTML5 / CSS3:
          |  Responsive Design,Bulma,MaterializeCSS,Bootstrap,Pug,SASS/Stylus,CSS-Grid,PostCSS
        p
          strong DevTools:
          |  Webpack, Git/ GitHub, Sketch, NPM, ESLint, Now
        p
          strong Javascript:
          |  ES6,Babel,VueJS,React,JSX/Style JSX,Single Page Application(SPA),Server/Client Side Render(SSR/CSR)
        p
          strong Backend:
          |  Firebase
      .content
        p.title Management Information Systems 
        p Málaga ( Spain ) | 2007 - 2012
        p Certificate of Higher Education (HNC)
    .content
      h3.title.is-3 Skills
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
      h3.title.is-3 Languages
      .skills
        .left-side
          p Spanish
          p German
          p English
        .right-side
          progress.progress.is-success(value="100" max="100")
          progress.progress.is-success(value="60" max="100")
          progress.progress.is-success(value="40" max="100")
    .content.laboral
      h3.title.is-3 Work experience
      strong Inventur Mitarbeiter
      p SPAR HANDELS AG | 2014 - currently
      strong Hardware-Techniker
      p X-TROM (Spanien) | 2012 - 2013
    .content.referenze
      h3.title.is-3 References
      .content
        p Monika Graf
        p SPAR Inventur Team Leiterin
        p +41 79 833 69 19
        p monika.graf@spar.ch
      .content
        p Maria Tobler
        p CEO Tobler Management
        p +41 43 818 96 80
        p maria.tobler@toblermanagement.ch
</template>

<script>
  export default {
    
  }
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
  .content {
    /* border: 1px solid red; */
  }
  .titulo {
    grid-column: 1 / span 2;
    text-align: end;
    padding-right: 40px;
  }
  h3,h4 {
    color: #374f75;
  }
  .description {
    grid-column: span 2;
    padding: 10px;
  }
  .description-right {
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
  .ausbildung {
    grid-column: span 2;
  }
  .ausbildung strong {
    text-decoration: underline;
  }
  .laboral {
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
  .referenze {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
  }
  .referenze h3 {
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
</style>