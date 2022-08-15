<template>
  <div class="container contenedor-card" id="productos">
    <div class="row">

      <div class="col mt-5" v-for="producto in productos.contenido">
        <div class="card" >
          <img src="https://http2.mlstatic.com/D_NQ_NP_883091-MCO42569690149_072020-O.webp"
               class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text indieflower text-center">{{producto.name}}</p>
            <p class="precio text-center">{{producto.price}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "Contenedorcards",
  setup(){
    const store = useStore();
    const productos = computed(() => store.state.productos);

    onMounted(() => {
      store.dispatch('cargarProductos')
    });

    return {
      productos
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

.precio {
  color: #04BF9D;
  font-weight: bolder;
  font-size: 18px;
}



</style>