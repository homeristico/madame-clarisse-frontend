<template>

  <div class="container-noelementos">

    <div class="card" >
      <div class="card-body card-noelementos">

        <p class="parrafo-noelementos">
          No Existen Elementos Bajo El Criterio De Busqueda
        </p>

      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "SinElementos"
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
  width: 48rem;
  height: 65vh;
  background-color: rgba(97, 172, 153, 0.1);
  box-shadow: 5px 10px 18px #888888;
  transition: transform 1s;
}

.container-noelementos {
  padding-top: 15vh;
  padding-bottom: 15vh;
  display: flex;
  justify-content: center;
}

.card-noelementos {
  background-image: url('../assets/imagenes background/fallin.png');
  display: flex;
  justify-content: center;
  align-items: center;
}
.parrafo-noelementos {
  font-size: 50px;
  text-align: center;
}

.imagen-noelementos {
  width: 8vw;
  height: 15vh;
}




</style>