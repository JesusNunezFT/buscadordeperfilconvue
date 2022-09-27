<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
  </script>

<template>
  <h1 class="bg-primary">Principal</h1>
  
  <button class="bg-primary">
    hola
  </button>

  <p>{{msg}}</p>

  <router-link to="/perfil">Perfil</router-link>

</template>