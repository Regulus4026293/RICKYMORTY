import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import PersonajesDetalles from './components/PersonajesDetalles.vue'

const routes=[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path:"/personaje/:id",
        name: "Personaje",
        component: PersonajesDetalles
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

createApp(App).use(router).mount('#app')
