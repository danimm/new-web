<template lang="pug">
  .container.is-fluid
    .content
      .columns
        .column
          figure.image
            img(src="https://firebasestorage.googleapis.com/v0/b/web-vue-f0b33.appspot.com/o/images%2Fdaniel.jpg?alt=media&token=ac465dc4-8ef6-48b9-a08b-7563bfdc3a18")
        .column
          h3 About me
          p Hi! I'm Daniel and I am a curious, hard-working and ambitious person who pays attention to the small details. I am into the Frontend development world since 2016. In addition I study on a daily basis using an online course format the new platform technologies, in order to be up to date regarding the new frameworks and skills that are used and demanded by the companies nowadays.  
          p I love learning the new technologies of modern web development and creating personal projects to put my knowledge into practice.
          p You can find all my personal projects in personal 
            router-link(to="portfolio") Portfolio.
          //- h3 Front end development
          //- p I'm specializing in Frontend Web Development, with the current Web standards and always looking for new front-end frameworks to add to my development stack.
          //- h3 Responsive Design
          //- p Always looking for the best user experience using responsive designs, with frameworks like Bootstrap, Materialize-css (used in this website), Foundation... It doesn't matter the device or the resolution, you will always have a good user experience.
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container {
    padding: 20px;
  }
  figure {
    max-width: 60%;
  }
  figure img {
    border-radius: 50%;
    border: 4px solid #374f75;
  }
  .column:nth-child(1) {
    display: flex;
    justify-content: center;
  }
</style>
