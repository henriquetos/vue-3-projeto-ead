<template>
    <div class="pageTitle">
            <span class="title">Meus Cursos</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <ul class="listCourses">
                <CardCourse :title="'Curso de Laravel com VueJs'" :image="''" :bgName="'laravel'"/>
            </ul>
        </div>
</template>

<script>
import CardCourse from "./components/CardCourse.vue"

export default {
    name: "HomeView",

    components: {
        CardCourse
    }
}
</script>