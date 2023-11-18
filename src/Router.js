import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ListarAlumno from "./components/ListarAlumnos.vue";
import DetalleAlumno from "./components/DetalleAlumno.vue";
import CrearAlumno from "./components/CrearAlumno.vue";
import ModificarAlumno from "./components/ModificarAlumno.vue";
import EliminarAlumno from "./components/EliminarAlumno.vue";
import CursoComponent from "./components/CursoComponent.vue";

const myRoutes = [
    {
        path: '/', component : HomeComponent
    },
    {
        path: '/login', component : LoginComponent
    },
    {
        path: '/alumnos', component : ListarAlumno
    },
    {
        path: '/detalle/:idAlumno', component : DetalleAlumno
    },
    {
        path: '/crear', component : CrearAlumno
    },
    {
        path: '/modificar/:idAlumno', component : ModificarAlumno
    },
    {
        path: '/eliminar/:idAlumno', component : EliminarAlumno
    },
    {
        path: '/curso/:annyo', component : CursoComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;