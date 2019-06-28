<template lang="pug">
  .grid
    .message.is-light
      .message-header.has-text-centered
        p.title.cen {{ $t('skills.title') }}
      .message-body
        .content.progress-container
          .content(v-for="t in techs")
            p {{ t.title }}
            progress(class="progress is-success" :value="t.progress" max="100")
        p {{ $t('skills.subtitle')}}
    .notification
      img(src="https://cdn-images-1.medium.com/max/1600/1*rrRcaZKZsjerUveQqTSx7A.png")
      p {{ $t('skills.text1')}}
      p {{ $t('skills.text2')}}
      br
      a.button.is-link(href="https://platzi.com/@Danimm" target="_blank") {{ $t('skills.profile')}}
    .contenedor
      span.tag.is-info.is-medium(
        v-for="i in Javascript"
      ) {{ i.title }}
    .contenedor
      span.tag.is-primary.is-medium(
        v-for="i in CSS3"
      ) {{ i.title }}
    .contenedor
      span.tag.is-link.is-medium(
        v-for="i in DevTools"
      ) {{ i.title }}
    .contenedor
      span.tag.is-warning.is-medium(
        v-for="i in Backend"
      ) {{ i.title }}
    .comming-soon
      span.tag.is-light.is-medium(
        v-for="i in Soon"
      ) {{ i.title }}
</template>

<script>
export default {
    data() {
        return {
            techs: [
                {
                    title: "HTML5",
                    progress: 80
                },
                {
                    title: "CSS",
                    progress: 60
                },
                {
                    title: "Javascript",
                    progress: 50
                }
            ],
            Javascript: [
                {
                    title: "Javascript"
                },
                {
                    title: "ECMAScript 6"
                },
                {
                    title: "Babel"
                },
                {
                    title: "VueJS"
                },
                {
                    title: "Nuxt(SSR)"
                },
                {
                    title: "ReactJS"
                },
                {
                    title: "JSX"
                },
                {
                    title: "NextJS(SSR)"
                },
                {
                    title: "SPA"
                },
                {
                    title: "Vue-Router"
                },
                {
                    title: "i18n"
                }
            ],
            CSS3: [
                {
                    title: "CSS3"
                },
                {
                    title: "Responsive Design"
                },
                {
                    title: "Bootstrap"
                },
                {
                    title: "Foundation"
                },
                {
                    title: "Bulma"
                },
                {
                    title: "MaterializeCSS"
                },
                {
                    title: "Pug(Jade)"
                },
                {
                    title: "SASS"
                },
                {
                    title: "PostCSS"
                },
                {
                    title: "Style JSX"
                },
                {
                    title: "CSS Grid"
                },
                {
                    title: "Transition"
                },
                {
                    title: "Animation"
                }
            ],
            DevTools: [
                {
                    title: "DevTools"
                },
                {
                    title: "Webpack"
                },
                {
                    title: "Git/GitHub"
                },
                {
                    title: "Sketch"
                },
                {
                    title: "NPM/Yarn"
                },
                {
                    title: "ESLint"
                },
                {
                    title: "Now"
                },
                {
                    title: "Chrome DevTools"
                },
                {
                    title: "VSCode"
                }
            ],
            Backend: [
                {
                    title: "Backend"
                },
                {
                    title: "Firebase"
                },
                {
                    title: "PHP"
                },
                {
                    title: "Laravel"
                },
                {
                    title: "SQL"
                },
                {
                    title: "MySQL"
                },
                {
                    title: "PHPMyAdmin"
                }
            ],
            Soon: [
                {
                    title: "Coming soon..✌🏻"
                },
                {
                    title: "Node"
                },
                {
                    title: "Express"
                },
                {
                    title: "MongoDB"
                },
                {
                    title: "Redux"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 20px;
    grid-gap: 10px;
}
.contenedor {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 2em);
    grid-gap: 10px;
    grid-row-start: 2;
}
.comming-soon {
    margin-top: 20px;
    display: grid;
    grid-gap: 10px;
    grid-column: 1 / -1;
}
.message {
    grid-column: 1 / span 3;
}
.contenedor.hastext {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.contenedor.hastext p {
    word-spacing: 20px;
}
.tag:nth-of-type(1) {
    grid-column: span 2;
    justify-self: stretch;
    font-weight: bold;
}
.progress-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
.notification {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
a.is-link {
    text-decoration: none;
}

@media screen and (max-width: 1000px) {
    .grid {
        display: flex;
        flex-direction: column;
    }
    .contenedor {
        margin: 20px 0;
    }
}
</style>