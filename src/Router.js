import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MarcaComponent from "./components/MarcaComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import PedidoComponent from "./components/PedidoComponent.vue";


const myRoutes = [
    {path:'/',component: HomeComponent},
  {path:'/marca/:marca',component: MarcaComponent},
  {path:'/login',component: LoginComponent},
  { path:'/perfil', component: PerfilComponent },
  { path:'/compras', component: ComprasComponent },
  { path:'/pedido', component: PedidoComponent },
   


];
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});
export default router;