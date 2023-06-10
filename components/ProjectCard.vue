<template>
    <NuxtLink :to="sluglink" class="project-card">
        <div class="information-section">
            <img class="project-img" :src="IMG">
            <div class="project-info">
                <section class="project-name-section">
                    <span class="projectColor" :style="{ '--projectcolor': projectcolor }"></span>
                    <h1 class="project-name">{{ ProjectName }}</h1>
                </section>
                <p class="project-intro"> {{ ProjectIntro }}</p>
            </div>
        </div>
    </Nuxtlink>
</template>
<script>
export default {
    name: "ProjectCard",
    setup() {
        const route = useRoute()
    },
    props: {
        IMG: String,
        projectcolor: String,
        ProjectName: String,
        ProjectIntro: String,
        sluglink: String
    },
};


</script>
<style>
:root {
    --heading-font: "reklame-script", sans-serif;
    --heading-weight: 700;
    --normal-font: "franklin-gothic-urw-cond", sans-serif;
    --normal-weight: 400;
    --dark-grey: #1A1D2E;
    --light-grey: #1F2232;
    --white: white;
    --red: #E6323F;
    --green: #56FC9A;
    --projectcolor: white;
}

.project-card {
    background-color: var(--light-grey);
    width: 95%;
    height: 280px;
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    -webkit-box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.19);
    text-decoration: none;
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

.project-card:hover {
    -webkit-box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.30);
    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.30);
}

.information-section {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.project-img {
    width: 240px;
    height: 240px;
    margin: 0;
    margin-left: 30px;
}

.project-info {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 40px;
}

.project-name-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 10px;
}

.projectColor {
    background-color: var(--projectcolor);
    height: 30px;
    width: 30px;
}

.project-name {
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    color: var(--white);
    font-size: 30px;
    margin: 0;
    position: relative;
}

.project-intro {
    font-family: var(--normal-font);
    font-weight: var(--normal-weight);
    color: var(--white);
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
}

/* -------------------------------------------- media queries */
@media screen and (max-width: 768px) {
    .project-card {
        width: 270px;
        height: auto;
        padding-block: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }

    .information-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .project-img {
        width: 80%;
        height: auto;
        margin: 0;
        margin-left: 0;
    }

    .project-info {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 0;
    }

    .project-name-section {
        margin-top: 8px
    }

    .project-name {
        font-size: 26px;
    }

    .projectColor {
        height: 26px;
        width: 26px;
    }
}
</style>