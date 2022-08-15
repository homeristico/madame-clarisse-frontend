<template>
  <div class="container container-carrusel mt-5">
    <div class="row">

      <div class="col">


        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">


          <div class="carousel-inner">
            <div v-for="(diapositiva, key) in diapositivas" :key="key">

              <div class="carousel-item active" v-if="key == 0" >
                <img :src="diapositiva.urlImg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <!--                <h5>First slide label</h5>-->
                  <p>{{diapositiva.texto}}</p>
                </div>
              </div>

              <div class="carousel-item" v-else>
                <img :src="diapositiva.urlImg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <!--                <h5>First slide label</h5>-->
                  <p>{{diapositiva.texto}}</p>
                </div>
              </div>

            </div>
          </div>



          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Carrusel",
  setup(){
    const store = useStore();
    const url = store.state.url;

    const diapositivas = ref();

    const cargarDiapositivas = async () => {
      const res = await fetch(`${url}/api/noticia`);
      diapositivas.value = await res.json();
    }

    onBeforeMount(() => {
      cargarDiapositivas();
    });

    return {
      diapositivas
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

.container-carrusel .carousel-item img{
  height: 50vh;
  border-radius: 10px;
}

.carousel h5 {
  font-family: "Josefin Sans";
  color: #04BF9D;
  font-weight: bolder;
  font-size: 45px;
}

.carousel p {
  color: #54bda9;
  font-weight: bolder;
}
</style>