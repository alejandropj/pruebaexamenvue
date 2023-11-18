<template>
  <div>
    <h1>Curso Component {{ idCurso }}</h1>
    <table class="table table-bordered">
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
        <tr v-for="alumno in alumnos" :key="alumno">
          <td>{{ alumno.idAlumno }}</td>
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.apellidos }}</td>
          <td>
            <img :src="alumno.imagen" style="width: 150px; height: 150px" />
          </td>
          <td>{{ alumno.activo }}</td>
          <td>{{ alumno.idCurso }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();
export default {
  name: "CursoComponent",
  data() {
    return {
      alumnos: null,
      idCurso: null,
    };
  },
  mounted() {
    this.idCurso = this.$route.params.annyo;
    service.getAlumnosCursos(this.idCurso).then((res) => {
      this.alumnos = res.data;
    });
  },
  watch: {
    "$route.params.annyo"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.idCurso = parseInt(this.$route.params.annyo);
        service.getAlumnosCursos(this.idCurso).then((res) => {
          this.alumnos = res.data;
        });
      }
    },
  },
};
</script>

<style>
</style>