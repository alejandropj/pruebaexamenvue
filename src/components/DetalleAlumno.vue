<template>
  <div>
    <table class="table table-bordered" v-if="alumno">
      <thead>
        <tr>
          <th>idAlumno</th>
          <th>nombre</th>
          <th>apellidos</th>
          <th>imagen</th>
          <th>activo</th>
          <th>idCurso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{alumno.idAlumno}}</td>
          <td>{{alumno.nombre}}</td>
          <td>{{alumno.apellidos}}</td>
          <td><img :src="alumno.imagen" style="width:150px;height:150px"/></td>
          <td>{{alumno.activo}}</td>
          <td>{{alumno.idCurso}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();

export default {
    name:"DetalleAlumno",
    data(){
      return{
        id:0,
        alumno:null
      }
    },
    mounted(){
      this.id = this.$route.params.idAlumno;
      service.getAlumno(this.id).then(res=>{
        this.alumno=res.data
      })
    }
}
</script>

<style>

</style>