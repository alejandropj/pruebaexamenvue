<template>
  <div>
    <h1>Login</h1>
    <form class="mx-5 px-5" v-on:submit.prevent="enviarDatos()">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label">Usuario</label>
        <input type="text" class="form-control" v-model="usuario.userName"/>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label">Contraseña</label>
        <input type="password" class="form-control" v-model="usuario.password" />
      </div>

      <!-- Submit button -->
      <button class="btn btn-primary btn-block mb-4">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import ServiceAlumnos from "./../services/ServiceAlumnos";
const service= new ServiceAlumnos();
export default {
  name: "LoginComponent",
  data(){
    return{
      usuario:{
        userName:"",
        password:""
      }
    }
  },
  methods:{
    enviarDatos(){
      service.login(this.usuario).then(result => {
        console.log(result.data.response);
        localStorage.setItem("token", result.data.response);
        this.$router.push("/home");
      })
    }
  }
};
</script>

<style>
</style>