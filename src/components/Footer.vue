<template>

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-8 mt-5">
                       <ul class="redes">
     <li style="&#45;&#45;clr:#25d366">
       <a href="https://api.whatsapp.com/send?phone=573028600085" target="_blank">
         <i class="fa-brands fa-whatsapp"></i>
       </a>
     </li>
     <li style="&#45;&#45;clr:#1da1f2">
       <a href="https://www.facebook.com/marlon.murillo.3762" target="_blank">
         <i class="fa-brands fa-facebook-f"></i>
       </a>
     </li>
     <li style="&#45;&#45;clr:#dd2a7b">
       <a href="https://www.instagram.com/madameclarissestore/" target="_blank">
         <i class="fa-brands fa-instagram"></i>
       </a>
     </li>
     <li style="&#45;&#45;clr:#ff0000">
       <a href="https://www.youtube.com/channel/UCQqhSn0yumS37gGQg-ABLEg" target="_blank">
         <i class="fa-brands fa-youtube"></i>
       </a>
     </li>
   </ul> 
            </div>
            <div class="col-4 mt-3">
               

            </div>
        </div>
        <div class="row">
            <div class="col">
                <p>madame clarisse ©</p>
            </div>
        </div>
    </div>
</div>

</template>







<script>
export default {
    
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

iframe {
    width: 30vw;
    height: 30vh;
}

.footer {
   /* position: fixed; */
   font-family: "Josefin Sans";
   height: 40vh;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgb(71, 65, 65);
   color: white;
   text-align: center;
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