<script>
export default {
  data() {
    return {
      favoritos: [],
    };
  },
  methods: {},
  mounted() {
    let Perfiles_Favoritos = [];
    // Buscamos en el localStorage los 80 perfiles
    let perfilesEnLocalTxt = localStorage.getItem("profiles");
    // Si se encontró algo, entramos al if:
    if (perfilesEnLocalTxt) {
      // Convertimos los perfiles de texto a objeto
      let perfilesEnLocal = JSON.parse(perfilesEnLocalTxt);
      // Ahora vamos a revisar cada uno de los perfiles:
      for (let perfil of perfilesEnLocal) {
        // convertimos el perfil a texto
        let nombreDelPerfil = JSON.stringify(perfil);
        // revisamos si este texto está guardado en localstorage:
        if (localStorage.getItem(nombreDelPerfil)) {
          // si está guardado, nos lo traemos:
          let PosiblePerfilFavorito = JSON.parse(
            localStorage.getItem(nombreDelPerfil)
          );
          // revisamos si este perfil es favorito:
          if (PosiblePerfilFavorito.estrella === true) {
            Perfiles_Favoritos.push(PosiblePerfilFavorito);
          }
        }
      }
    }
    this.favoritos = Perfiles_Favoritos;
  },
};
</script>

<template>
  <div class="container w-100 p-3">
    <table
      class="d-flex flex-column table text-center shadow-4-strong square rounded-8"
    >
      <thead class="bg-info shadow-1-strong">
        <tr
          class="d-flex align-items-center justify-content-around text-center"
        >
          <th>Ver Perfil</th>
          <th>Nombre</th>
          <th>Genero</th>
          <th>Edad</th>
          <th>Nacion</th>
          <th>F/Nacim.</th>
          <th>F/Regis</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(profile, index) in favoritos"
          :key="index"
          class="d-flex align-items-center justify-content-around text-center"
        >
          <td>{{ profile.perfil.name.first }}</td>
          <td>{{ profile.perfil.gender }}</td>
          <td>{{ profile.perfil.nat }}</td>
          <td>{{ profile.perfil.dob.date }}</td>
          <td>{{ profile.perfil.registered.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="card-body">
    <router-link to="/"
      ><button type="button" class="btn bg-primary text-white shadow-4-strong">
        <i class="fas fa-search me-1"></i><strong> Pag. Principal </strong>
      </button></router-link
    >

    <button @click="$router.go(-1)" type="button" class="btn bg-warning text-white shadow-4-strong">
      <i class="fas fa-search me-1"></i
      ><strong> Regresar </strong>
    </button>
  </div>
</template>
