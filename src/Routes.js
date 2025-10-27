import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CIneComponent from "./components/CIneComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CiclosVida from "./components/CiclosVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import ParImpar from "./components/ParImpar.vue";
import PropiedadConmutada from "./components/PropiedadConmutada.vue";
import MetodosFilters from "./components/MetodosFilters.vue";



const myRoutes = [
    { path: '/', component: HomeComponent},
    { path: '/cine', component: CIneComponent},
    { path: '/musica', component: MusicaComponent},   
    { path: '/ciclo', component: CiclosVida},   
    { path: '/dir', component: DirectivasComponent},   
    { path: '/par', component: ParImpar},   
    { path: '/propiedad', component: PropiedadConmutada},   
    { path: '/fil', component: MetodosFilters},   
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;