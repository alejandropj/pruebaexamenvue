import { Global } from "@/Global";
import axios from "axios";

export default class ServiceAlumnos {
    login(usuario){
        return new Promise(function(resolve){
            var request = "api/Auth/Login";
            var url = Global.urlEjemplos + request;
            axios.post(url,usuario).then(response=>{
                resolve(response);
            })
        })
    }
    getToken(){
        const headers = {
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
        return headers;
    }
    getAlumnos(){
        const headers = this.getToken();
        return new Promise(function(resolve){
            var request = "api/Alumnos/AlumnosToken";
            var url = Global.urlEjemplos + request;
            axios.get(url,{headers}).then(response=>{
                resolve(response);
            })
        })
    }
    

}