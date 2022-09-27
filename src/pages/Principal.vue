<script>
export default {
  data() {
    return {
      msg: "Hello World!",
    };
  },
  methods: {
    handleConsulta() {},
  },
};
</script>

<template>
  <div class="container" breakpoint="sm">
    <table class="table text-center shadow-4-strong square rounded-8 ">
      <thead >
        <tr class="bg-info shadow-1-strong ">  
          <th ></th>        
            <button type="button" class="mb-3 mt-3 btn bg-primary text-white shadow-5-strong"
            @click="handleConsulta">Consultar</button>
          <th></th>       
        </tr>        
      </thead>
      <tbody>
        <tr>          
          <th scope="col">
            <input type="text" placeholder="Nombre" class=" border-2 border border-info rounded-3 pe-3"/>
          </th>
          
          <th scope="col">
            <label for="" class="me-3">Edad</label>
            <select class="border-2 border-info rounded-3 pe-3" name="" id="">
              <option value="">1</option>
            </select></th>

          <th scope="col">
            <label for="" class="me-3"><strong>Genero</strong></label>
            <select class="border-2 border-info rounded-3 pe-3" name="" id="">
              <option value="">Famele</option>
              <option value="">Male</option>
            </select></th>          
        </tr>
        <tr>
          <th scope="row">
            <label for="" class="me-3"><strong>Nacionalidad</strong></label>
            <select class="border-2 border-info rounded-3 pe-3" name="" id="">
              <option value="">Vnzla</option>
              <option value="">Col</option>
            </select>
          </th>
          <td scope="row">
            <label for="" class="me-3"><strong>F/Nacimiento</strong></label>
            <select class="border-2 border-info rounded-3 pe-3" name="" id="">
              <option value="">1984</option>
              <option value="">1990</option>
            </select>
          </td>
          <td scope="row">
            <label for="" class="me-3"><strong>F/Registro</strong></label>
            <select class=" border-2 border-info rounded-3 pe-3" name="" id="">
              <option value="">2000</option>
              <option value="">2005</option>
            </select></td>
        </tr>

        <tr >
          <th scope="row"></th>
          <button type="button" class="me-2 mb-2 mt-2 btn bg-primary text-white shadow-4-strong"><i class="fas fa-filter me-4"></i><strong>Fistral DAtos</strong></button>
          <button type="button" class="me-2 mb-2 mt-2 btn bg-warning text-primary shadow-4-strong"><i class="fas fa-search me-4"></i><strong><router-link to="/favoritos"> Ver Favoritos</router-link></strong></button>

          <td></td>
        </tr>
        <tr class="table-secondary">
          <th scope="row"></th>
          <td></td>
          <td></td>          
        </tr>        
      </tbody>
    </table>

    <table class="d-flex flex-column table text-center shadow-4-strong square rounded-8">
      <thead class="bg-info shadow-1-strong">
        <tr class="d-flex align-items-center justify-content-around text-center">
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
        <tr class="d-flex align-items-center justify-content-around  text-center">
          <th><router-link to="/perfil">Perfil</router-link></th>
          <th>Jesus</th>
          <th>Male</th>
          <th>38</th>
          <th>Vnzla</th>
          <th>1984</th>
          <th>2022</th>
        </tr>
      </tbody>
    </table>
  </div>

  
</template>

<style>

</style>
