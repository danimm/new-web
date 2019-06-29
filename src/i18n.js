import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const messages = {
    en: {
        home: {
            title: "Daniel Muñoz Martín",
            subtitle: "Junior Front-end Developer",
            content:
                "New Design! I'm still working on new features. Coming soon..👍🏻"
        },
        header: {
            navbar: {
                home: "Home",
                about: "About",
                portfolio: "Portfolio",
                skills: "Skills",
                cv: "CV",
                languages: {
                    title: "Languages",
                    spanish: "🇪🇸 Spanish",
                    english: "🇬🇧 English",
                    german: "🇩🇪 German"
                }
            }
        },
        about: {
            title: "About me",
            text1:
                "Hi! I'm Daniel and I am a curious, hard-working and ambitious person who pays attention to the small details. I am into the Frontend development world since 2016. In addition I study on a daily basis using an online course format the new platform technologies, in order to be up to date regarding the new frameworks and skills that are used and demanded by the companies nowadays.",
            text2:
                "I love learning the new technologies of modern web development and creating personal projects to put my knowledge into practice. ",
            text3: "You can find all my personal projects in personal ",
            link: "Portfolio."
        },
        portfolio: {
            project1: {
                title: "Huetor",
                description:
                    "This is a web-project for a lodgings company using Responsive Design, Vue.js, Vue-Router and i18n(internationalization)."
            },
            project2: {
                title: "Vue Music",
                description:
                    "Final project of the Vue.js course in Platzi.com, in which we use the Spotify API to make an online music player."
            },
            project3: {
                title: "Memory game",
                description:
                    "This project is a game to memorize colours using only Javascript. Only for desktop."
            },
            project4: {
                title: "Last.fm",
                description:
                    "In this simple project to show a small list of artists using the last fm API."
            },
            project5: {
                title: "Local Storage",
                description:
                    "This is a project using the local storage to create a list of tasks."
            },
            project6: {
                title: "Memory game",
                description:
                    "This project is a game to memorize letters using only Javascript. Only for desktop."
            },
            project7: {
                title: "Responsive Grid",
                description:
                    "Check responsive design with Grid layout from CSS3, just awesome !!"
            }
        },
        skills: {
            title: "Lifelong learning",
            subtitle:
                "In the world of web development, you have to learn constantly! That's why I study daily to be always updated with the new frameworks and libraries.",
            text1: "One of my favorite places to study is in Platzi.",
            text2:
                "It is an online education platform with more than 1,000,000 students around the world.",
            profile: "Check my profile",
            coming: "Coming soon ..✌🏻"
        },
        cv: {
            title: "Daniel Muñoz Martín",
            subtitle: "Junior Front-end Developer",
            notification:
                "If you want to see the complete pdf version, write me an email.",
            button: "Email me!",
            about: "About me",
            text1:
                "I am a curious, hard-working and ambitious person who pays attention to the small details. I am into the Frontend development world since 2016.",
            text2:
                "In addition I study on a daily basis using an online course format the new platform technologies, in order to be up to date regarding the new frameworks and skills that are used and demanded by the companies nowadays.",
            formation: {
                title: "Formation",
                formation1: {
                    title: "Front-end Developer",
                    duration: "platzi.com | 2016 - currently",
                    text:
                        "Platzi is one of the best online platforms worldwide. They have more than 1,00,000 students from all over the world. Visit my profile to see a little more about my knowledge. ",
                    link: "https://platzi.com/@danimm",
                    studium: {
                        title: "Management Information Systems ",
                        where: "Málaga ( Spain ) | 2007 - 2012",
                        certificate: "Certificate of Higher Education (HNC)"
                    }
                }
            },
            skills: {
                title: "Skills"
            },
            languages: {
                title: "Languages",
                spanish: "Spanish",
                german: "German",
                english: "English"
            },
            work: {
                title: "Work experience",
                work1: {
                    title: "Inventur Team",
                    time: "SPAR HANDELS AG | 2014 - currently"
                },
                work2: {
                    title: "Hardware-Techniker",
                    time: "X-TROM (Spanien) | 2012 - 2013"
                }
            },
            references: "References"
        },
        footer: {
            title: "Thank you for your visit!",
            text1:
                "The purpose of this website is to have all my personal projects and knowledge in one place.",
            text2: "If you have any questions write me to: ",
            created: "Created by Daniel Muñoz Martín",
            navbar: {
                home: "Home",
                about: "About",
                portfolio: "Portfolio",
                skills: "Skills",
                cv: "CV"
            }
        }
    },
    de: {
        home: {
            title: "Daniel Muñoz Martín",
            subtitle: "Junior Front-end web Entwickler",
            content:
                "Neues Design! Ich arbeite immer noch an neuen Funktionen. Kommt bald....👍🏻"
        },
        header: {
            navbar: {
                home: "Home",
                about: "über mich",
                portfolio: "Portfolio",
                skills: "Fähigkeit",
                cv: "Lebenslauf",
                languages: {
                    title: "Sprachen",
                    spanish: "🇪🇸 Spanisch",
                    english: "🇬🇧 Englisch",
                    german: "🇩🇪 Deutsch"
                }
            }
        },
        about: {
            title: "Über mich",
            text1:
                "Hallo! Ich bin Daniel und ich bin eine neugierige, fleißige und ehrgeizige Person, die auf die kleinen Details achtet. Ich bin seit 2016 in der Frontend-Entwicklungswelt. Außerdem lerne ich täglich in einem Online-Kursformat die neuen Plattformtechnologien, um über die neuen Frameworks und Fähigkeiten informiert zu sein, die heutzutage von den Unternehmen verwendet und gefordert werden .",
            text2:
                "Ich liebe es, die neuen Technologien der modernen Webentwicklung zu lernen und persönliche Projekte zu erstellen, um mein Wissen in die Praxis umzusetzen.",
            text3:
                "Sie finden alle meine persönlichen Projekte im persönlichen ",
            link: "Portafolio."
        },
        portfolio: {
            project1: {
                title: "Huetor",
                description:
                    "Dies ist ein Webprojekt für ein Wohnungsunternehmen, das Responsive Design, Vue.js, Vue-Router und i18n (Internationalisierung) einsetzt."
            },
            project2: {
                title: "Vue Music",
                description:
                    "Abschlussprojekt des Vue.js-Kurses auf Platzi.com, in dem wir die Spotify-API verwenden, um einen Online-Musikplayer zu erstellen."
            },
            project3: {
                title: "Memory game",
                description:
                    "Dieses Projekt ist ein Spiel, um Farben nur mit Javascript auswendig zu lernen. Nur für den Desktop."
            },
            project4: {
                title: "Last.fm",
                description:
                    "In diesem einfachen Projekt soll eine kleine Liste von Künstlern mit der last-fm API angezeigt werden."
            },
            project5: {
                title: "Local Storage",
                description:
                    "Dies ist ein Projekt, das den Local Storage verwendet, um eine Liste von Aufgaben zu erstellen."
            },
            project6: {
                title: "Memory game",
                description:
                    "Dieses Projekt ist ein Spiel, bei dem Buchstaben nur mit Javascript auswendig gelernt werden. Nur für den Desktop."
            },
            project7: {
                title: "Responsive Grid",
                description:
                    "Überprüfen Sie das Responsive Design mit dem Grid-Layout von CSS3, einfach fantastisch!"
            }
        },
        skills: {
            title: "Lebenslanges Lernen",
            subtitle:
                "In der Welt der Webentwicklung muss man ständig lernen! Deshalb lerne ich täglich, um immer über die neuen Frameworks und Bibliotheken auf dem Laufenden zu sein.",
            text1: "Einer meiner Lieblingsorte zum Lernen ist Platzi.",
            text2:
                "Es ist eine Online-Bildungsplattform mit mehr als 1.000.000 Studenten auf der ganzen Welt.",
            profile: "Besuche mein Profil!",
            coming: "Kommt bald ..✌🏻"
        },
        cv: {
            title: "Daniel Muñoz Martín",
            subtitle: "Junior Front-end Entwickler",
            notification:
                "Wenn Sie die vollständige PDF-Version sehen möchten, schreiben Sie mir eine E-Mail.",
            button: "Email senden",
            about: "Über mich",
            text1:
                "Ich bin eine neugierige, fleißige und ehrgeizige Person, die auf die kleinen Details achtet. Ich bin seit 2016 in der Frontend-Entwicklungswelt.",
            text2:
                "Außerdem lerne ich täglich anhand eines Online-Kursformats die neuen Plattformtechnologien, um über die neuen Frameworks und Fähigkeiten informiert zu sein, die heutzutage von den Unternehmen genutzt und gefordert werden.",
            formation: {
                title: "Ausbildung",
                formation1: {
                    title: "Front-end web Entwickler",
                    duration: "platzi.com | 2016 - aktuell",
                    text:
                        "Platzi ist eine der besten Online-Plattformen weltweit. Sie haben mehr als 1'000'0000 Studenten aus der ganzen Welt. Besuchen Sie mein Profil, um mehr über mein Wissen zu erfahren. ",
                    link: "https://platzi.com/@danimm",
                    studium: {
                        title:
                            "Hardware-Techniker, Management, Installation und Unterhalt von Informationssystemen. ",
                        where: "Málaga ( Spanien ) | 2007 - 2012",
                        certificate: "Lehre als Hardware Techniker"
                    }
                }
            },
            skills: {
                title: "Fähigkeiten"
            },
            languages: {
                title: "Sprachen",
                spanish: "Spanisch",
                german: "Deutsch",
                english: "Englisch"
            },
            work: {
                title: "Berufserfahrung",
                work1: {
                    title: "Inventur Team",
                    time: "SPAR HANDELS AG | 2014 - aktuell"
                },
                work2: {
                    title: "Hardware-Techniker",
                    time: "X-TROM (Spanien) | 2012 - 2013"
                }
            },
            references: "Referenzen"
        },
        footer: {
            title: "Thank you for your visit!",
            text1:
                "The purpose of this website is to have all my personal projects and knowledge in one place.",
            text2: "If you have any questions write me to: ",
            created: "Created by Daniel Muñoz Martín",
            navbar: {
                home: "Home",
                about: "About",
                portfolio: "Portfolio",
                skills: "Skills",
                cv: "CV"
            }
        }
    },
    es: {
        home: {
            title: "Daniel Muñoz Martín",
            subtitle: "Desarrollador Frontend Junior",
            content:
                "Nuevo Diseño! Estoy trabajando en nuevas funcionalidades. Vendrán pronto..👍🏻"
        },
        header: {
            navbar: {
                home: "Inicio",
                about: "Sobre mí",
                portfolio: "Portafolio",
                skills: "Habilidades",
                cv: "CV",
                languages: {
                    title: "Idiomas",
                    spanish: "🇪🇸 Español",
                    english: "🇬🇧 Inglés",
                    german: "🇩🇪 Alemán"
                }
            }
        },
        about: {
            title: "Sobre mí",
            text1:
                "Hola! Soy Daniel y soy una persona curiosa, trabajadora y ambiciosa que presta atención a los pequeños detalles. Me adentré en el mundo del Frontend desde el 2016. Estudio diariamente en plataformas online, para estar a la última con los nuevos frameworks y tecnologías que las empresas demandan.",
            text2:
                "Me encanta aprender nuevas tecnologías del desarrollo moderno y crear proyectos personales para poner los conocimientos en práctica.",
            text3: "Puedes entrarlos en mi ",
            link: "Portafolio."
        },
        portfolio: {
            project1: {
                title: "Huetor",
                description:
                    "Es un proyecto web para una compañia de alojamientos utilizando Responsive Design, Vue.js, Vue-Router y i18n(internationalización)."
            },
            project2: {
                title: "Vue Music",
                description:
                    "Proyecto final del curso profesional de Vue.js en Platzi en el cuál usamos la API de Spotify para hacer un reproductor de música online."
            },
            project3: {
                title: "Memory game",
                description:
                    "Este proyecto es un juego para memorizar colores usando sólo Javascript. Sólo disponible para escritorio."
            },
            project4: {
                title: "Last.fm",
                description:
                    "En este simple proyecto para mostrar una lista de artistas usando la API de Last.fm"
            },
            project5: {
                title: "Local Storage",
                description:
                    "Este proyecto usa el almacenamiento local para crear una lista de tareas"
            },
            project6: {
                title: "Memory game",
                description:
                    "Este proyecto es un juego para memorizar letras usando sólo Javascript. Sólo disponible para escritorio."
            },
            project7: {
                title: "Responsive Grid",
                description:
                    "Comprueba el responsive design con Grid layout de CSS3, es increíble!"
            }
        },
        skills: {
            title: "Nunca pares de aprender",
            subtitle:
                "En el mundo del desarrollo web, hay que estar constantemente aprendiendo. Esa es la razón por la que estudio diariamente para estar siempre actualizado con los nuevos frameworks y librerias",
            text1: "Uno de mis plataformas favoritos para estudiar es Platzi.",
            text2:
                "Es una plataforma de educación online con mñas de 1 millón de estudiantes alrededor del mundo",
            profile: "Visita mi perfil!",
            coming: "próximamente..✌🏻"
        },
        cv: {
            title: "Daniel Muñoz Martín",
            subtitle: "Desarrollador Frontend Junior",
            notification: "Si quieres ver la versión en PDF, envíame un email",
            button: "Quiero verla!",
            about: "Acerca de mí",
            text1:
                "Soy una persona trabajadora, curiosa y ambiciosa que presta atención a los pequeños detalles. Empecé en el mundo del desarrollo Frontend en 2016",
            text2:
                "Estudio diariamente utilizando plataformas de educación online para manterme actualizado con las últimas tecnologías que requieren hoy en día las empresas.",
            formation: {
                title: "Formación",
                formation1: {
                    title: "Desarrollo Frontend",
                    duration: "platzi.com | 2016 - actualmente",
                    text:
                        "Platzi es una de las mejores plataformas online a nivel mundial. Tienen más de 1 millón de estudiantes alrededor del mundo. Si quieres visitar mi perfil y saber un poco más acerca de los cursos que tomo. ",
                    link: "https://platzi.com/@danimm",
                    studium: {
                        title: "Administrador de Sistemas Informáticos ",
                        where: "Málaga ( España ) | 2007 - 2012",
                        certificate: "Ciclo Formativo de Grado Superior"
                    }
                }
            },
            skills: {
                title: "Habilidades"
            },
            languages: {
                title: "Lenguajes",
                spanish: "Español",
                german: "Alemán",
                english: "Inglés"
            },
            work: {
                title: "Experiencia Laboral",
                work1: {
                    title: "Inventur Team",
                    time: "SPAR HANDELS AG | 2014 - actualmente"
                },
                work2: {
                    title: "Técnico de Hardware",
                    time: "X-TROM (España) | 2012 - 2013"
                }
            },
            references: "Referencias"
        },
        footer: {
            title: "Gracias por tu visita!",
            text1:
                "El propósito de esta web es tener todos mis proyectos personales en un lugar para poder mostrarlos",
            text2: "Si tienes alguna pregunta escríbeme un email a: ",
            created: "Creada por Daniel Muñoz Martín",
            navbar: {
                home: "Inicio",
                about: "Sobre mí",
                portfolio: "Portafolio",
                skills: "Habilidades",
                cv: "CV"
            }
        }
    }
}

const i18n = new VueI18n({
    messages,
    locale: "en"
})

export default i18n
