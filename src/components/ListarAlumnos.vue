<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>idAlumno</th>
          <th>nombre</th>
          <th>apellidos</th>
          <th>imagen</th>
          <th>activo</th>
          <th>idCurso</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in alumnos" :key="alumno">
          <td>{{alumno.idAlumno}}</td>
          <td>{{alumno.nombre}}</td>
          <td>{{alumno.apellidos}}</td>
          <td><img :src="alumno.imagen" style="width:150px;height:150px"/></td>
          <td>{{alumno.activo}}</td>
          <td>{{alumno.idCurso}}</td>
          <td>
            <router-link class="btn btn-info" :to="'/detalle/'+alumno.idAlumno">Detalle</router-link>
            <router-link class="btn btn-warning" :to="'/modificar/'+alumno.idAlumno">Actualizar</router-link>
            <router-link class="btn btn-danger" :to="'/eliminar/'+alumno.idAlumno">Eliminar</router-link>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();

export default {
    name:"ListarAlumnos",
    data(){
      return{
        alumnos:null
      }
    },
    mounted(){
      service.getAlumnos().then(res=>{
        this.alumnos=res.data
      })
    }
}
</script>

<style>

</style>