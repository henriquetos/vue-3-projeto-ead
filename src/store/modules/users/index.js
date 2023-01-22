import AuthService from "@/services/auth.service" //importei do codigo AuthService.js essa classe com todas informações

export default{
    state: { //state são as coisas que um objeto vai ter e suas variaveis
        user: {
            name: '',
            email: ''
        },

        loggedIn: false
    },

    getters: {
    },

    mutations: { //são as funções que vai executar a ação que eu quero quando ela for chamada
        SET_USER (state, user){
            state.user = user
            state.loggedIn = true
        },

        LOGOUT (state){
            state.user = {
                name: '',
                email: ''
            }

            state.loggedIn = false
        }

    },

    actions: {
        auth({state}, params){
            state.loggedIn
            return AuthService.auth(params)
        }
    }

}