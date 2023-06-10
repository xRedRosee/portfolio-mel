<template>
    <Navbar></Navbar>
    <div class="details">
        <h1 class="detail-name"> {{ this.ProjectName }}</h1>
        <p class="detail-intro"> {{ this.ProjectIntro }}</p>
        <section class="detail-sections">
            <article class="detail-section-1">
                <img class="detail-img" :src="this.detailimg1">
                <p class="detail-text"> {{ this.detailtext1 }}</p>
            </article>
            <article class="detail-section-2">
                <img class="detail-img" :src="this.detailimg1">
                <p class="detail-text"> {{ this.detailtext1 }}</p>
            </article>
        </section>
        <div class="detail-links">
            <NuxtLink to="/projects" class="projects-link">
                <span class="red-arrow">&#8592;</span>
                <span class="red-underline"> See more projects </span>
            </NuxtLink>
            <NuxtLink :to="this.link" class="code-link" v-if="this.link != null" target="_blank">
                <span class="red-underline"> See code </span>
                <span class="red-arrow"> &#8594;</span>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue';

export default {
    setup() {
        const route = useRoute()
    },
    data() {
        return {
            pageName: "",
            ProjectName: "",
            ProjectIntro: "",
            detailimg1: "",
            detailtext1: "",
            detailimg2: "",
            detailtext2: "",
            link: "",
        }
    },
    methods: {
        checkSlug() {
            this.pageName = this.$route.params.project;
            this.getData(this.pageName);
        },
        async getData(pageName) {
            //import JSON data
            const JsonFile = await import('~/src/projects.json');

            // set JSON data in array
            const myArray = JsonFile.projects;

            //for each object in the array
            for (var i = 0; i < myArray.length; i++) {

                //if the object is equal to the page
                if (myArray[i].pagename == pageName) {
                    //set variables to the JSON data
                    this.ProjectName = myArray[i].name;
                    this.ProjectIntro = myArray[i].intro
                    this.detailimg1 = myArray[i].detailimg1;
                    this.detailtext1 = myArray[i].detailtext1;
                    this.detailimg2 = myArray[i].detailimg2;
                    this.detailtext2 = myArray[i].detailtext2;
                    this.link = myArray[i].link;
                }
            }
        }
    },
    mounted() {
        this.checkSlug()
    }
}
</script>
<style scoped>
@import url("https://use.typekit.net/tag4fkx.css");

:root {
    --heading-font: "reklame-script", sans-serif;
    --heading-weight: 700;
    --normal-font: "franklin-gothic-urw-cond", sans-serif;
    --normal-weight: 400;
    --dark-grey: #1A1D2E;
    --light-grey: #1F2232;
    --white: white;
    --red: #E6323F;
}

.details {
    width: 100%;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 50px;
}

.detail-name {
    color: white;
    font-family: var(--heading-font);
    font-weight: var(--heading-weight);
    font-size: 50px;
    margin: 0;
    margin-left: 40px;
    animation: 0.8s ease-out slideUpFade;
}

@keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@-webkit-keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.detail-intro {
    color: white;
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 20px;
    margin: 0;
    margin-left: 40px;
    animation: 0.8s ease-out slideUpFade;
}

@keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@-webkit-keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.detail-sections {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    animation: 0.8s ease-out slideUpFade;
}

@keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@-webkit-keyframes slideUpFade {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.detail-section-1 {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: center;
    justify-content: space-around;
}

.detail-img {
    width: 40%;
    height: auto;
}

.detail-text {
    color: white;
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 18px;
    margin: 0;
    width: 45%;
}

.detail-section-2 {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;
    justify-content: center;
    justify-content: space-around;
}

.detail-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
}

.projects-link {
    color: white;
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 18px;
    margin: 0;
    text-decoration: none;
    margin-left: 30px;
}

.code-link {
    color: white;
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 18px;
    margin: 0;
    text-decoration: none;
    margin-right: 30px;
}

.red-arrow {
    color: var(--red);
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    font-size: 18px;
    margin: 0;
    text-decoration: none;
}

.red-underline {
    border-bottom: 2px solid var(--red);
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .detail-name {
        font-size: 36px;
    }

    .detail-intro {
        font-size: 18px;
    }

    .detail-section-1 {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
    }

    .detail-img {
        width: 75%;
        height: auto;
    }

    .detail-text {
        width: 75%;
        font-size: 16px;
    }

    .detail-section-2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        justify-content: center;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
    }

    .projects-link {
        margin-left: 20px;
    }

    .code-link {
        margin-right: 20px;
    }
}
</style>