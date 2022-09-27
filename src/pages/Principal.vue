<script>
export default {
  data() {
    return {
      profiles: [],
      gender: [],
      selectedGender: "",
      age: [],
      selectedAge: "",
      nat: [],
      selectedNat: "",
      fn: [],
      selectedFn: "",
      fr: [],
      selectedFr: "",
      name: "",
      filterProfiles: [],
    };
  },
  methods: {
    async handleConsulta() {
      let areProfilesInLocalStore = localStorage.getItem("profiles");
      let perfiles = [];

      if (areProfilesInLocalStore) {
        perfiles = JSON.parse(localStorage.getItem("profiles"));
      } else {
        perfiles = await fetch("https://randomuser.me/api/?results=80")
          .then((response) => response.json())
          .then((data) => data.results);

        localStorage.setItem("profiles", JSON.stringify(perfiles));
      }
      this.filterProfiles = perfiles;
      this.profiles = perfiles;
      this.handleGender(perfiles);
      this.handleAge(perfiles);
      this.handleNat(perfiles);
      this.handleFn(perfiles);
      this.handleFr(perfiles);
    },

    handleFiltro() {
      let perfiles_filtrados = this.profiles;
      if (this.name) {
        perfiles_filtrados = perfiles_filtrados.filter((perfil) =>
          perfil.name.first.toLowerCase().includes(this.name.toLowerCase())
        );
      }

      if (this.selectedGender) {
        perfiles_filtrados = perfiles_filtrados.filter(
          (perfil) => perfil.gender == this.selectedGender
        );
      }

      if (this.selectedAge) {
        perfiles_filtrados = perfiles_filtrados.filter(
          (perfil) => perfil.dob.age == this.selectedAge
        );
      }

      if (this.selectedNat) {
        perfiles_filtrados = perfiles_filtrados.filter(
          (perfil) => perfil.nat == this.selectedNat
        );
      }

      if (this.selectedFn) {
        perfiles_filtrados = perfiles_filtrados.filter(
          (perfil) => perfil.dob.date == this.selectedFn
        );
      }

      if (this.selectedFr) {
        perfiles_filtrados = perfiles_filtrados.filter(
          (perfil) => perfil.registered.date == this.selectedFr
        );
      }

      this.filterProfiles = perfiles_filtrados;
    },

    handleGender(perfiles) {
      let generos_duplicados = perfiles.map((p) => p.gender);
      let generos = generos_duplicados.filter((item, index) => {
        return generos_duplicados.indexOf(item) === index;
      });
      this.gender = generos;
    },

    handleAge(perfiles) {
      let edades_duplicados = perfiles.map((p) => p.dob.age);
      let edades = edades_duplicados.filter((item, index) => {
        return edades_duplicados.indexOf(item) === index;
      });
      edades = edades.sort();
      this.age = edades;
    },

    handleNat(perfiles) {
      let nacionalidad_duplicados = perfiles.map((p) => p.nat);
      let nacionalidad = nacionalidad_duplicados.filter((item, index) => {
        return nacionalidad_duplicados.indexOf(item) === index;
      });
      nacionalidad = nacionalidad.sort();
      this.nat = nacionalidad;
    },

    handleFn(perfiles) {
      let nacimiento_duplicados = perfiles.map((p) => p.dob.date);
      let nacimiento = nacimiento_duplicados.filter((item, index) => {
        return nacimiento_duplicados.indexOf(item) === index;
      });
      nacimiento = nacimiento.sort();
      this.fn = nacimiento;
    },

    handleFr(perfiles) {
      let registro_duplicados = perfiles.map((p) => p.registered.date);
      let registro = registro_duplicados.filter((item, index) => {
        return registro_duplicados.indexOf(item) === index;
      });
      registro = registro.sort();
      this.fr = registro;
    },
  },
};
</script>

<template>
  <div class="container" breakpoint="sm">
    <table class="table text-center shadow-4-strong square rounded-8">
      <thead>
        <tr class="bg-info shadow-1-strong">
          <th></th>
          <button
            type="button"
            class="mb-3 mt-3 btn bg-primary text-white shadow-5-strong"
            @click="handleConsulta"
          >
            Consultar
          </button>

          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="col">
            <input
              v-model="name"
              type="text"
              placeholder="Nombre"
              class="border-2 border border-info rounded-3 pe-3"
            />
          </th>

          <th scope="col">
            <label for="" class="me-3">Edad</label>
            <select
              v-model="selectedAge"
              class="border-2 border-info rounded-3 pe-3"
              name=""
              id=""
            >
              <option value="">todos</option>
              <option :value="edad" v-for="edad in age" :key="edad">
                {{ edad }}
              </option>
            </select>
          </th>

          <th scope="col">
            <label class="me-3"><strong>Genero</strong></label>
            <select
              v-model="selectedGender"
              class="border-2 border-info rounded-3 pe-3"
              name=""
              id=""
            >
              <option value="">todos</option>
              <option :value="genero" v-for="genero in gender" :key="genero">
                {{ genero }}
              </option>
            </select>
          </th>
        </tr>
        <tr>
          <th scope="row">
            <label for="" class="me-3"><strong>Nacionalidad</strong></label>
            <select
              v-model="selectedNat"
              class="border-2 border-info rounded-3 pe-3"
              name=""
              id=""
            >
              <option value="">todas</option>
              <option :value="item" v-for="item in nat" :key="item">
                {{ item }}
              </option>
            </select>
          </th>
          <td scope="row">
            <label for="" class="me-3"><strong>F/Nacimiento</strong></label>
            <select
              v-model="selectedFn"
              class="border-2 border-info rounded-3 pe-3"
              name=""
              id=""
            >
              <option value="">todas</option>
              <option :value="item" v-for="item in fn" :key="item">
                {{ item }}
              </option>
            </select>
          </td>

          <td scope="row">
            <label for="" class="me-3"><strong>F/Registro</strong></label>
            <select
              v-model="selectedFr"
              class="border-2 border-info rounded-3 pe-3"
              name=""
              id=""
            >
              <option value="">todas</option>
              <option :value="item" v-for="item in fr" :key="item">
                {{ item }}
              </option>
            </select>
          </td>
        </tr>

        <tr>
          <th scope="row"></th>
          <button
            @click="handleFiltro"
            type="button"
            class="me-2 mb-2 mt-2 btn bg-primary text-white shadow-4-strong"
          >
            <i class="fas fa-filter me-4"></i><strong>Filtrar Datos</strong>
          </button>
          <button
            type="button"
            class="me-2 mb-2 mt-2 btn bg-warning text-primary shadow-4-strong"
          >
            <i class="fas fa-search me-4"></i
            ><strong
              ><router-link to="/favoritos"> Ver Favoritos</router-link></strong
            >
          </button>

          <td></td>
        </tr>
        <tr class="table-secondary">
          <th scope="row"></th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

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
          class="d-flex align-items-center justify-content-around text-center"
          v-for="(profile, index) in filterProfiles"
          :key="index"
        >
          <td>
            <router-link
              :to="{ name: 'perfil', params: { perfil: profile.login.uuid } }"
              >Perfil</router-link
            >
          </td>
          <td>{{ profile.name.first }}</td>
          <td>{{ profile.dob.age }}</td>
          <td>{{ profile.gender }}</td>
          <td>{{ profile.nat }}</td>
          <td>{{ profile.dob.date }}</td>
          <td>{{ profile.registered.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
