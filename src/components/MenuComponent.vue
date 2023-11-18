<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/alumnos">Listar Alumnos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/crear">Crear Alumno</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cursos
              </a>
              <ul class="dropdown-menu">
                <li v-for="curso in cursos" :key="curso">
                  <router-link class="dropdown-item" :to="'/curso/'+curso">{{curso}}</router-link>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
  name: "MenuComponent",
  data(){
    return{
      cursos:null
    }
  },mounted(){
    service.getCursos().then(res=>{
      this.cursos = res.data
    })
  }
};
</script>

<style>
</style>