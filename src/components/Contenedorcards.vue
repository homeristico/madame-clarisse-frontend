<template>

<!--  CARDS-->



  <div class="container contenedor-card" id="productos">
    <div class="row">

      <div class="col mt-5" v-for="producto in productos.contenido" v-if="productos.contenido.length > 0">
        <div class="card" >
          <img src="https://http2.mlstatic.com/D_NQ_NP_883091-MCO42569690149_072020-O.webp"
               class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text indieflower text-center">{{producto.name}}</p>
            <p class="precio text-center">{{producto.price}}</p>
            <div class="text-center">
              <a class="link-card"

                  :href="'https://api.whatsapp.com/send?phone=573028600085&text='+producto.name"
                  target="_blank"
              >
                Pregunta me
              </a>
            </div>



          </div>
        </div>
      </div>

      <SinElementos v-else></SinElementos>

    </div>
  </div>

  <!-- FIN CARDS-->

<!--  PAGINACIÓN-->

  <div class="container-paginacion" v-if="productos.totalPaginas >= 1">
    <nav aria-label="...">
      <ul class="pagination">

        <li class="page-item link-pagination" >
          <a @click="paginacion(productos.numeroPagina - 1)" class="page-link" v-if="productos.numeroPagina > 1">
            {{productos.numeroPagina - 1}}
          </a>
        </li>
        <li class="page-item active" aria-current="page">
          <span class="page-link bg-success">
            {{productos.numeroPagina}}
          </span>
        </li>
        <li class="page-item link-pagination">
          <a @click="paginacion(productos.numeroPagina + 1)" class="page-link" v-if="productos.numeroPagina < productos.totalPaginas">
            {{productos.numeroPagina + 1}}
          </a>
        </li>
        <li class="page-item"><a class="page-link" > --- </a></li>
        <li class="page-item link-pagination">
          <a @click="paginacion(productos.totalPaginas)" class="page-link" >
            {{productos.totalPaginas}}
          </a>
        </li>

      </ul>
    </nav>
  </div>
  <!-- FIN PAGINACIÓN-->
</template>

<script>
import {useStore} from "vuex";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import SinElementos from "@/components/SinElementos";

export default {
  name: "Contenedorcards",
  components: {
    SinElementos
  },

  setup(){
    const store = useStore();
    const productos = computed(() => store.state.productos);

    let name = computed(() => store.state.name);
    let categoriaId = computed(() => store.state.categoriaId);
    let page = computed(() => store.state.page);

    onBeforeMount(() => {
      store.dispatch('cargarProductos')
    });



    const paginacion = async (pagina) => {
      store.dispatch('chagePage', pagina);
      store.dispatch('cargarProductos',{categoriaId: categoriaId.value, name: name.value, page: page.value})
    }

    return {
      productos, paginacion
    }

  }
}
</script>

<style scoped>

@font-face {
  font-family: Jose Thin;
  src: url('../assets/fonts/JosefinSans-Thin.ttf');
}

@font-face {
  font-family: Josefin Sans;
  src: url('../assets/fonts/JosefinSans-Regular.ttf');
}


.card {
  font-family: "Josefin Sans";
  width: 18rem;
  height: 65vh;
  background-color: rgba(97, 172, 153, 0.1);
  box-shadow: 5px 10px 18px #888888;
  transition: transform 1s;
}

.card:hover {
  transform: translate(0px, -20px);
  cursor: pointer;
  box-shadow: 5px 10px 18px #58809b;
}

.card::before {
  transform: skewX(345deg);
  background-color: rgba(255, 255, 255, 0.2);
}

.card-img-top {
  padding: 20px;
  height: 40vh;
}

.link-card {
  text-decoration: none;
}
.precio {
  color: #04BF9D;
  font-weight: bolder;
  font-size: 18px;
}


.container-paginacion {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.page-item {
  padding: 5px;
}

.link-pagination {
  cursor: pointer;
}

</style>