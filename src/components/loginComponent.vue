
<template>
   <div>
     <h1>Login</h1>
    <form @submit.prevent="hacerLogin">
       <label>Usuario</label>       <input type="text" v-model="email" class="form-control" />
      <label>Contraseña</label>
       <input type="password" v-model="password" class="form-control" />
      <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
   </div>
</template>

// <script>
import ServiceCubo from "../services/service.cubo.js";
const service = new ServiceCubo();
export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    hacerLogin() {
      const usuario = { email: this.email, password: this.password };
      service.login(usuario)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push("/perfil");
        });
    }
  }
};
</script>
