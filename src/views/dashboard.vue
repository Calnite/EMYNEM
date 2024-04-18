<script>

import allmoduls from '/src/views/allmoduls.vue';
import human from '/src/views/human.vue';
import empty from '/src/views/emptydash.vue';
import notes from '/src/views/notes.vue';

const routes = {
  '/allmoduls': allmoduls,
  '/human': human,
  '/dashboard/empty': empty,
  '/notes': notes
  
}

</script>

<template>
<div class="dashboard">
    <!--header-->
    <nav class="navbar px-4">
        <div class="container-fluid">
      <div>
        <img style="max-height:17px;" src="/src/assets/EMY.png"> 
        <img style="max-height:17px;" src="/src/assets/EMYNEM.png" class="mx-1">
      </div>
      <input class="form-control mx-auto text-center" style="max-width:300px;" id="search" placeholder="Search">
      <div class="dropdown">
          <a class="btn btn-secondary navbtn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="ph ph-user"></i>
          </a>
        
          <ul class="dropdown-menu dropdown-menu-end">
            <li class="p-0"><a class="dropdown-item" href="#">Profil</a></li>
            <li class="p-0"><a class="dropdown-item" href="#">Setting</a></li>
            <li class="p-0"><a class="dropdown-item" href="#">Abmelden</a></li>
          </ul>
      </div>
        </div>
    </nav>

    <!--moduls-->
    <div class="container my-4 pb-4">
        <ul class="nav">
            <li class="nav-item pr-2 pb-2">
              <router-link class="nav-link modules active" aria-current="page" to="/dashboard/allmoduls">Alle Module</router-link>
            </li>
            <li class="nav-item px-2 pb-2">
              <router-link class="nav-link modules" to="/dashboard/human">Human Factors</router-link>
            </li>
            <li class="nav-item px-2 pb-2">
                <router-link class="nav-link modules" to="/dashboard/empty">UX WEB</router-link>
            </li>
            <li class="nav-item px-2 pb-2">
                <router-link class="nav-link modules" to="/dashboard/empty">SOCIM</router-link>
            </li>
            <li class="nav-item px-2 pb-2">
                <router-link class="nav-link modules" to="/dashboard/empty">Mathe</router-link>
            </li>
            <li class="nav-item px-2 pb-2">
                <router-link class="nav-link modules" to="/dashboard/empty">Audio</router-link>
            </li>
          </ul>
    </div>

    <!--page contents-->
    <div>
    <router-view></router-view>

    </div>

</div>
</template>