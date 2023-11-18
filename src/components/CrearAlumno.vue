<template>
  <div>
    <h1>CrearAlumno</h1>
    <form class="mx-5 px-5" v-on:submit.prevent="enviarDatos()">
       
      <div class="form-outline mb-4">
        <label class="form-label">IdAlumno</label>
        <input type="number" class="form-control" v-model="alumno.idAlumno"/>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="alumno.nombre"/>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label">Apellidos</label>
        <input type="text" class="form-control" v-model="alumno.apellidos"/>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label">Imagen</label>
        <input type="text" class="form-control" v-model="alumno.imagen"/>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label">Activo</label>
        <input type="number" class="form-control" v-model="alumno.activo"/>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label">IdCurso</label>
        <input type="number" class="form-control" v-model="alumno.idCurso" />
      </div>

      <!-- Submit button -->
      <button class="btn btn-primary btn-block mb-4">
        Enviar
      </button>

    </form>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();
export default {
    name:"CrearAlumno",
    data(){
      return {
        alumno: {
          idAlumno:0,
          nombre:"",
          apellidos:"",
          imagen:"",
          activo:0,
          idCurso:0
        }
      }
    },
    methods:{
      enviarDatos(){
        service.createAlumno(this.alumno).then(res=>{
          this.$router.push("/alumnos");
          console.log(res);
        })
      }
    }
}
</script>

<style>

</style>