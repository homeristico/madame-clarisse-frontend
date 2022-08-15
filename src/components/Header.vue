<template>
  <div class="text-center lobster header" id="noticias">
    <img :src="require('./../assets/imagenes background/arbol.png')" alt="" class="imagen-titulo">
    <h1 class="titulo">MADAME CLARISSE</h1>

    <ul class="redes">
      <li style="--clr:#25d366">
        <a href="https://api.whatsapp.com/send?phone=573028600085" target="_blank">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </li>
      <li style="--clr:#1da1f2">
        <a href="https://www.facebook.com/marlon.murillo.3762" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
      </li>
      <li style="--clr:#dd2a7b">
        <a href="https://www.instagram.com/madameclarissestore/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li style="--clr:#ff0000">
        <a href="https://www.youtube.com/channel/UCQqhSn0yumS37gGQg-ABLEg" target="_blank">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  name: "Header",
  setup(){



  }

}
</script>

<style scoped>

@font-face {
  font-family: lobster;
  src: url('../assets/fonts/Lobster-Regular.ttf');
}

@font-face {
  font-family: indieflower;
  src: url('./../assets/fonts/IndieFlower-Regular.ttf');
}

.titulo {
  color: rgb(97, 136, 116);
  margin-top: 4vh;
  font-size: 55px;
}

.header {
  display: flex;
  justify-content: center;
}

.imagen-titulo {
  width: 8vw;
  height: 15vh;
  margin-left: 22vw;
}

.lobster {
  font-family: lobster;
}

ul.redes {
  margin-top: 5vh;
  margin-left: 5vw;
  position: relative;
  display: flex;
  gap: 40px;
  list-style: none;
}



ul.redes li .fa-brands {
  font-size: 2em;
  -webkit-text-stroke: 2px var(--clr);
  color: transparent;
}




</style>