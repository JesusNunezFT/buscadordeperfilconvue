<template>
  <div class="container d-flex justify-content-center align-items-center ">
    <div class="card bg-secondary bg-gradient shadow-5-strong" style="width: 18rem">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
        class="card-img-top"
        alt="Chicago Skyscrapers"
      />
      <div class="card-body">
        <h5 class="card-title">Nombre:</h5>
        <p>Jesus Nuñez</p>
        <div>          
          <i class="fas fa-star text-warning"></i>
        </div>
      </div>

      <ul class="list-group list-group-light list-group-small shadow-5-strong">
        <li class="list-group-item px-4"><strong>Edad:</strong> <p>38</p></li>
        <li class="list-group-item px-4"><strong>Email:</strong>  <p>@gmail.com</p></li>
        <li class="list-group-item px-4"><strong>Genero:</strong>  <p>Male</p></li>
        <li class="list-group-item px-4"><strong>Nacionalidad:</strong> <p>Col</p></li>
        <li class="list-group-item px-4"><strong>F/Nacimiento:</strong> <p>1984</p></li>
        <li class="list-group-item px-4"><strong>F/Registro:</strong>  <p>2022</p></li>
      </ul>

      <div class="card-body">        
        <router-link to="/"><button type="button" class="btn bg-primary text-white shadow-4-strong"><i class="fas fa-search me-1"></i><strong> Pag. Principal </strong></button></router-link>
      </div>


      <div>
        <router-link to="/favoritos"><button type="button" class="btn bg-warning text-primary shadow-4-strong"><i class="fas fa-search me-1"></i><strong> Ver Favoritos</strong></button></router-link>
      </div>

    </div>
  </div>
  
</template>
