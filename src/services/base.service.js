import Http from "./http.init"

export default class BaseService {
    constructor(){
        this.instance = new BaseService
    }

    static request(status = {auth: false}){ //vai receber um dado em auth, mas se não receber nada, vai ser false
        return new Http(status)
    }

}