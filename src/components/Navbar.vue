<template>


  <nav class="navbar navbar-expand-lg sticky-top mt-5">
    <div class="container-fluid mx-5">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- CATEGORIAS -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a @click="filtrarProductoPorCategoria(0)"
                   class="dropdown-item categoria"
                   target="_blank"
                >
                  Todo
                </a>
              </li>
              <li v-for="categoria in categorias">
                <a @click="filtrarProductoPorCategoria(categoria.id)"
                    class="dropdown-item categoria"
                    target="_blank"
                >
                  {{categoria.nombre}}
                </a>
              </li>
            </ul>
          </li>
          <!-- FIN CATEGORIAS -->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Contacto
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                    class="dropdown-item"
                    href="https://api.whatsapp.com/send?phone=573028600085"
                    target="_blank"
                >
                  What´s App
                </a>
              </li>
              <li>
                <a
                    class="dropdown-item"
                    href="https://www.facebook.com/marlon.murillo.3762"
                    target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li><a class="dropdown-item" href="#">Instagram</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control input-search me-2" type="search" placeholder="nombre producto" aria-label="Search">
          <button class="button-search " type="button">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>

import { useStore } from 'vuex';
import { onBeforeMount } from "vue";
import { ref } from "vue";

export default {
  name: "Navbar",
  setup(){
    const store = useStore();
    const url = store.state.url;
    let categorias = ref();

   onBeforeMount(() => {
     cargarCategorias();
   });


    const cargarCategorias = async () => {
      const res = await fetch(`${url}/api/categoria`);
      categorias.value = await res.json();
    }

    // filtro productos por categoria
    const filtrarProductoPorCategoria = async (id) => {
      store.dispatch('cargarProductos',id)
    }


    return {
          categorias, filtrarProductoPorCategoria
    }
  }
}

</script>





<style>

@font-face {
  font-family: Jose Thin;
  src: url('../assets/fonts/JosefinSans-Thin.ttf');
}

@font-face {
  font-family: Josefin Sans;
  src: url('../assets/fonts/JosefinSans-Regular.ttf');
}

a.categoria {
  cursor: pointer;
}
.nav-link {
  font-family: "Josefin Sans";
  margin-inline-end: 17px;
  font-size: 24px;
  transition: transform 2s, text-shadow 2s;
  color: #dd51a8;
}

.nav-link:hover {
  transform: scale(1.5);
  text-shadow: 3px 3px 2px rgb(193, 219, 201);
}


.button-search {
  width: 10vw;
  background-color: #dd51a8;
  color: white;
  border-color: #dd51a8;
  border-radius: 10px;
}

.button-search:hover {
  border-color: #04BF9D;
  background-color: #04BF9D;
  color: white;
}

.button-search:active {
  border-color: #04BF9D;
  background-color: #47887a;
  color: white;
  border-radius: 10px;
  box-shadow:  -2px -2px 18px rgb(68, 192, 166);
}

.input-search {
  border-top: none;
  border-right: 0px;
  border-left: none;
  background-color: transparent;
  border-radius: 0px;
  padding-left: 20px;
  outline:none !important;
}

.input-search:focus {
  font-size: 18px;
  padding-left: 20px;
  border: 1px solid hsla(328, 33%, 67%, 0.89);
  border-radius: 20px;
  box-shadow: none;
}



</style>