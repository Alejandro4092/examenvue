import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/homeComponent.vue";
import MarcaComponent from "./components/marcaComponent.vue";
import LoginComponent from "./components/loginComponent.vue";
import PerfilComponent from "./components/perfilComponent.vue";
import ComprasComponent from "./components/comprasComponent.vue";
import PedidoComponent from "./components/pedidoComponent.vue";


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