<template>
     <HeaderComponent />

     <section>
        <router-view></router-view>
     </section>

     <FooterComponent />
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

export default {
    name: "DefaultTemplate",

    setup(){
        onBeforeMount(() =>{
            document.body.classList.add('page')
            document.body.classList.add('dark')

            document.title = 'Curso EAD com VueJS 3 - EspecializaTI'
        })
    },

    components: {
        HeaderComponent,
        FooterComponent
    }

}
</script>