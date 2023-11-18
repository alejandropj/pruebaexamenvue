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
          <td>{{ alumno.idAlumno }}</td>
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.apellidos }}</td>
          <td>
            <img :src="alumno.imagen" style="width: 150px; height: 150px" />
          </td>
          <td>{{ alumno.activo }}</td>
          <td>{{ alumno.idCurso }}</td>
          <td>
            <router-link
              class="btn btn-info"
              :to="'/detalle/' + alumno.idAlumno"
              >Detalle</router-link
            >
            <router-link
              class="btn btn-warning"
              :to="'/modificar/' + alumno.idAlumno"
              >Actualizar</router-link
            >
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Eliminar
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Eliminar {{alumno.nombre}}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Volver
                    </button>
                    <button type="button" class="btn btn-primary" @click="eliminarAlumno(alumno.idAlumno)">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceAlumnos from "@/services/ServiceAlumnos";
const service = new ServiceAlumnos();

export default {
  name: "ListarAlumnos",
  data() {
    return {
      alumnos: null,
    };
  },
  mounted() {
    service.getAlumnos().then((res) => {
      this.alumnos = res.data;
    });
  },
  methods:{
    eliminarAlumno(idAlumno){
      alert("Eliminado "+idAlumno);
    }
  }
};
</script>

<style>
</style>