<template>
  <Header></Header>
  <Carrusel></Carrusel>
  <Navbar></Navbar>
  <Contenedorcards></Contenedorcards>
  <Footer></Footer>
</template>

<script>

import Header from "@/components/Header";
import Carrusel from "@/components/Carrusel";
import Navbar from "@/components/Navbar";
import Contenedorcards from "@/components/Contenedorcards";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Carrusel,
    Navbar,
    Contenedorcards,
    Footer
  }


}

</script>

<style>


body {
  /*background-image: linear-gradient(to top left,hsl(186, 39%, 86%),hsl(0, 0%, 97%),hsl(157, 36%, 91%) );*/
  height: 100%;
  background-image: url('./assets/imagenes background/bg-pattern-desktop.svg');
}



</style>