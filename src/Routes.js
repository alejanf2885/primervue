import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CIneComponent from "./components/CIneComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CiclosVida from "./components/CiclosVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";



const myRoutes = [
    { path: '/', component: HomeComponent},
    { path: '/cine', component: CIneComponent},
    { path: '/musica', component: MusicaComponent},   
    { path: '/ciclo', component: CiclosVida},   
    { path: '/dir', component: DirectivasComponent},   
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;