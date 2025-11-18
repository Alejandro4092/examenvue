<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/login">login</router-link>
                    </li>
                                         
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="marca in marcas" :key="marca">
                              <router-link class="dropdown-item" :to="'/marca/'+marca">{{marca}}</router-link>
                              </li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
import ServiceCubo from "../services/service.cubo.js";
const service = new ServiceCubo();
export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
    };
  },
  mounted() {
    this.loadMarcas();
  },
  methods: {
    loadMarcas() {
      let prom = service.findCubosMarca();
      prom.then((response) => {
        this.marcas = response;
      }).catch(err => {
        console.error('Failed loading marcas', err);
      });
    },
  },
};
</script>

<style>
</style>