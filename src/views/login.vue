<script>
import dashboard from './dashboard.vue';

const routes = {
  '/dashboard': dashboard
}
</script>

<template>
<div class="loginbody d-flex flex-wrap align-content-center justify-content-center">
        <div class="container">
            <div class="logo d-flex justify-content-center mb-5 pb-5">
                <img src="/src/assets/EMY.png" class="mx-2"> 
                <img src="/src/assets/EMYNEM.png" class="mx-2">
            </div>
            <div class="login mx-auto mb-5 pb-5">
                <input type="email" class="form-control mb-3 text-center" id="loginemail" placeholder="E-mail">
                
                <input type="email" class="form-control mb-4 text-center" id="loginpassword" placeholder="Password">
                
                
                <router-link type="button" class="btn btn-primary" id="loginbutton" to="/dashboard/allmoduls">Login</router-link>
            </div>
            <div class="login google mx-auto">
              <router-link type="button" class="btn btn-secondary" id="loginbutton" to="/dashboard/allmoduls"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/24px-Google_%22G%22_logo.svg.png?20230822192911" class="mx-1"> Anmelden mit Google</router-link>
            </div>
        </div>
    </div>
</template>