<template>
    <div class="container my-5">
        <div class="row gap-5">
            
            <!--notebooks-->
            <div class="col-lg-7 col-md-6 col-12">
                <div class="container-fluid inrow p-0">
                    <h1>Notizbücher</h1>
                    <ul class="nav mb-2">
                        <li class="nav-item pr-2">
                            <a class="nav-link iconlink" aria-current="page" href=""><i class="ph ph-funnel"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex justify-content-end mb-4">
                    <span class="subtext">Filter: Zuletzts bearbeitet</span>
                </div>
                <div class="row gap-2">
                    <!--notebook create-->
                    <div class="col-sm notebook align-items-center justify-content-center">
                        <router-link class="pluscreate bg-light d-flex align-items-center justify-content-center"  to="/notes"><i class="ph ph-plus"></i></router-link>
                    </div>

                </div>
            </div>
            
            <!--tasks-->
            <div class="col-sm">
                <div id="aufgaben" class="mb-5">
                    <div class="container-fluid inrow p-0 mb-4">
                        <h1>Aufgaben</h1>
                        <div class="d-flex gap-3 align-items-center">
                        <ul class="nav">
                            <li class="nav-item pr-2">
                                <a class="nav-link iconlink" aria-current="page" href="#"><i class="ph ph-calendar-dots"></i></a>
                            </li>
                        </ul>
                        <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ph ph-plus"></i>
                        </a>
                        </div>
                    </div>
                    
                    <!--checkbox-->
                    <div class="container-fluid p-3 card">
                        <p class="text-center">Yippie keine Aufgaben!</p>
                    </div>

                </div>

                <!--learning-->
                <div id="lernziel">
                    <div class="container-fluid inrow p-0 mb-4">
                        <h1>Lernziele</h1>
                        <div class="d-flex gap-3">
                        <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ph ph-plus"></i>
                        </a>
                        </div>
                    </div>

                    <div class="container-fluid p-3 card mb-5">
                        <p class="text-center">Time to chill!</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>