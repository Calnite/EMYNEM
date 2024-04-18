<script>

export default {
    name: 'App',
    data () {
      return {
        config: {
          events: {
            initialized: function () {
              console.log('initialized')
            },
            
      'froalaEditor.focus' : function(e, editor) {
        console.log(editor.selection.get());
      }
          }
        },
        model: 'start typing!'
      }
    }
  };

</script>

<template>
    <!--header-->
    <nav class="navbar topbar py-4">
        <div class="container-fluid">
      <div class="px-1">
        <router-link class="btn btn-secondary navbtn" to="/dashboard/allmoduls" >
            <i class="ph ph-house"></i>
        </router-link>
      </div>

      <div class="card shadow py-2 px-2" style="border-radius:100px">
        <div class="d-flex gap-3">

        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-arrow-u-up-left"></i>
        </a>
        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-arrow-u-up-right"></i>
        </a>

        <div style="border-left:1px solid #d9d9d9"></div>

        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-pencil-simple"></i>
        </a>
        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-text-t"></i>
        </a>
        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-table"></i>
        </a>
        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-microphone"></i>
        </a>

        <div style="border-left:1px solid #d9d9d9"></div>

        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-paperclip"></i>
        </a>

        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-share"></i>
        </a>

        </div>

      </div>

      <div style="margin-right:1rem;">
          <a class="btn btn-secondary navbtn shadow" href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <i class="ph ph-user"></i>
          </a>
        
      </div>
        </div>
    </nav>
    

    <!--assistant-->
    <div class="assistant">
    <div class="offcanvas offcanvas-end p-4" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
        <h1 class="offcanvas-title" id="offcanvasScrollingLabel">Assistant</h1>
          <a class="btn btn-secondary btn-close navbtn" style="height:32px; width:32px;" href="#" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          </a>
        </div>

        <div class="offcanvas-body" style="overflow:auto;">
            <h5>Aus dem internet</h5>
            <div style="overflow-x:hidden;">
            <div class="container d-flex my-4 p-0 gap-3" style="width:1500px;">
                <div class="card" style="width: 240px;">
                    <div class="card-img-top" style="height:120px; overflow:hidden; border-radius:20px 20px 0 0;" >
                        <img class="card-img" src="/src/assets/notebookcover/hooked.png">
                    </div>
                <div class="card-body">
                    <h6 class="card-title">Hooked: How to Build Habit-Forming Products</h6>
                    <p class="card-text subtext">Buch - Nir Eyal</p>
                </div>
                </div>

                
                <div class="card" style="width: 240px;">
                    <div class="card-img-top" style="height:120px; overflow:hidden; border-radius:20px 20px 0 0;" >
                        <img class="card-img" src="/src/assets/notebookcover/modell.png">
                    </div>
                <div class="card-body">
                    <h6 class="card-title">Hooked: Das Konzept hinter Produkten</h6>
                    <p class="card-text subtext">Medium - Behavioral Design Playbook</p>
                </div>
                </div>
            </div>
            
            </div>
            <div class="d-block mb-5">
                    <a class="btn btn-secondary">mehr anzeigen</a>
            </div>

            
            <h5>Notizen deiner Mitstudierenden</h5>
            
            <div class="card my-3">
                    <div class="card-img-top p-3" style="height:160px; overflow:hidden; border-radius:20px 20px 0 0;" >
                        <p>Motivation umfasst eine Vielzahl von Faktoren, die menschliches Verhalten lenken. Dark Patterns, wie beispielsweise in Online-Shopping-Websites, nutzen absichtlich irreführende Designmethoden, um das Verhalten und die Entscheidungsfindung der Nutzer zu beeinflussen. Motivationsfaktoren wie die Maslowsche Bedürfnispyramide oder der Einfluss von Dopamin auf die Motivation werden untersucht. Zum Beispiel kann die Verwendung von Belohnungspunkten oder Rabatten auf Websites wie Amazon dazu führen, dass Kunden mehr einkaufen, um das Belohnungsgefühl zu erleben.</p>
                    </div>
                    <hr>
                <div class="card-body">
                    <h6 class="card-title">Sarahs Notizen</h6>
                    <p class="card-text subtext">Ausführlicher Mitschrieb mit Beispielen</p>
            </div>
            </div>
            
            <div class="card my-3">
                    <div class="card-img-top p-3" style="height:160px; overflow:hidden; border-radius:20px 20px 0 0;" >
                        <img class="card-img" src="/src/assets/notebookcover/leon.png">
                    </div>
                    <hr>
                <div class="card-body">
                    <h6 class="card-title">Leons Notizen</h6>
                    <p class="card-text subtext">Vollständige Notizen der Vorlesung</p>
            </div>
            </div>
        </div>
    </div>
        
    </div>
    
    <!--sidebar-->
    <div class="sidebar d-flex flex-column p-3 gap-3 shadow">
        <hr>
        <a class="btn btn-secondary sidebtn" style="background:#EC4899;" href="#" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            <span>MO</span>
        </a>
        <a class="btn btn-secondary sidebtn" style="background:url(https://i.pinimg.com/236x/33/c3/00/33c3004fb9989ced068772f48a8f0a10.jpg) center; background-size: cover;" href="#" >
        </a>
        <a class="btn btn-secondary sidebtn" style="background:#10B981;" href="#" >
            <span>UX</span>
        </a>
        <a class="btn btn-secondary sidebtn" style="background:url(https://miro.medium.com/v2/resize:fit:1358/1*GI-td9gs8D5OKZd19mAOqA.png) center; background-size: cover;"  href="#" >
        </a>
        <a class="btn btn-secondary sidebtn" style="background:#F97316;" href="#" >
            <span>AD</span>
        </a>
        <a class="btn btn-secondary sidebtn" style="background:#0EA5E9;" href="#" >
            <span>AU</span>
        </a>
    </div>

    <div class="sidebar-menu">
        <div class="collapse collapse-horizontal p-3 shadow" id="collapseWidthExample">
                <h3>Titel</h3>
        <ul class="nav flex-column">
            <li class="nav-item">
            <a class="nav-link active text-nowrap" aria-current="page" href="#">Motivation</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-nowrap" aria-current="page" href="#">Hook Modell</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-nowrap" aria-current="page" href="#">Notes</a>
            </li>
        </ul>

        <span class="workspacesetting">
        <a class="btn btn-secondary navbtn " href="#" >
            <i class="ph ph-share"></i>
        </a>
        </span>

        </div>
    </div>

    <!--workspace-->  
    <div class="container workspace inrow gap-2 my-5 p-5" style="max-width:1000px;">
        <div class="col my-4 py-5">
            <h1 class="mb-4">Titel</h1>
            <froala id="editor" :tag="'textarea'" :config="config" v-model:value="model"></froala>
        </div>
    </div>

</template>