<template>
    <section id="loginPage" :style="{backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')'}">
        <div class="loginContent">
            <div class="loginCard">
                <div class="decor" style="background-image: url('./assets/images/building.jpg');">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTi">
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            <p>
                                Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                            </p>
                        </span>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
                <div class="login">
                    <div class="content">
                        <span class="logo">
                            <img src="images/logoDark.svg" alt="">
                        </span>
                        <span>
                            <p>Seja muito bem vindo!</p>
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
                        </span>
                        <form action="/dist/index.html" method="">
                            <div class="groupForm">
                                <i class="far fa-envelope"></i>
                                <input type="email" name="email" placeholder="Email" v-model="email" required>
                            </div>
                            <div class="groupForm">
                                <i class="far fa-key"></i>
                                <input type="password" name="password" placeholder="Senha" v-model="password" required>
                                <i class="far fa-eye buttom"></i>
                            </div>
                            <button 
                            :class="[
                            'btn',
                            'primary',
                            loading ? 'loading' : '' 
                            ]" 
                            type="submit" 
                            @click.prevent="auth">
                            <span v-if="loading">Enviando...</span> <!-- se estiver ainda carregando mostra esse texto no botão, se não é Login -->
                            <span v-else>Login</span>
                            </button>
                        </form>
                        <span>
                            <p class="fontSmall">Esqueceu sua senha? 
                            <router-link :to="{name: 'forget.password'}" class="link primary">Clique aqui!</router-link>
                            </p>
                        </span>
                    </div>
                    <span class="copyright fontSmall">
                        Todos os Direitos reservados - <b>Especializati</b>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
//import router from '@/router/index'

import router from '@/router'
import { useStore } from 'vuex'

export default {
    name: 'AuthLogin',

    setup(){
        const store = useStore()
        const email = ref("")
        const password = ref("")
        const loading = ref(false)

        //const login = () => router.push({name: 'campus.home'}) //serve para teste para direcionar para uma outra pagina, no caso se clicasse no botão login

        const auth = () => {
            loading.value = true

            store.dispatch('auth', {
                email: email.value,
                password: password.value,
                device_name: 'auth_vue3'
            })
            .then(() => router.push({name: 'campus.home'}))
            .catch(() => alert('error'))
            .finally(() => loading.value = false)
        }

        return{
            //login,
            auth,
            email,
            password,
            loading
        }
    }
}
</script>