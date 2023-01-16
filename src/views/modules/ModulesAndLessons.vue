<template>
    <div>
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

         <div class="content">
            <div class="container">
                
                <ModulesAula />

                <div class="right">
                    <div class="content">
                        
                        <PlayerAula />

                        <SupportsAula />

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ModulesAula from "./components/Modules.vue"
import PlayerAula from "./components/PlayerAula.vue"
import SupportsAula from "./components/SupportsAula.vue"

export default {
    name: "ModulesAndLessons",

    components: {
        ModulesAula,
        PlayerAula,
        SupportsAula
    }
}
</script>