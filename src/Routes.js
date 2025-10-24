import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CIneComponent from "./components/CIneComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";



const myRoutes = [
    { path: '/', component: HomeComponent},
    { path: '/cine', component: CIneComponent},
    { path: '/musica', component: MusicaComponent},   
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;