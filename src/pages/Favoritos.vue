<template>
  
  <div class="container">
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
  <div class="card-body">        
        
    <router-link to="/"><button type="button" class="btn bg-primary text-white shadow-4-strong"><i class="fas fa-search me-1"></i><strong> Pag. Principal </strong></button></router-link>
    <router-link to="/perfil"><button type="button" class="btn bg-warning text-primary shadow-4-strong"><i class="fas fa-search me-1"></i><strong> regresar</strong></button></router-link>
  </div>


  

  
</template>