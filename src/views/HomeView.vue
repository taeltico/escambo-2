<template>
  <main id="home">
    
    <header>
        <div class="row">
            <div class="col-12 col-md-10">
                <img src="imagens do site/img/ESCAMBO.png" width="300" height="150">
            </div>
            <div class="col-12 col-md-2">

                <form action="processa.php" method="post">
                    Login<input type="text" name="login"><br> Senha
                    <input type="password" name="senha">
                    <input type="submit" value="Logar">

                </form>
            </div>
        </div>
    </header>

    <nav id="barra" class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="login.html">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Vendas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="ofertas.html">Oferta do dia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Historico</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Visitas</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Notificações</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="carrinho.html">Carrinho</a>
                    </li>
                </ul>
                <div id="direita">
                    <input type="text" id="txtBusca" placeholder="Buscar..." />
                    <button id="btnBusca">Buscar</button>
                </div>
            </div>
        </div>
    </nav>


    <div class="">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-12 borda">
                    <table id="center">

                        <a class="nav-link" aria-current="page" href="produtos.html">Categorias</a>

                        <a class="nav-link" aria-current="page" href="login.html">Móveis</a>

                        <a class="nav-link" aria-current="page" href="login.html">Veículos</a>

                        <a class="nav-link" aria-current="page" href="login.html">Eletronicos</a>

                        <a class="nav-link" aria-current="page" href="login.html">Informática</a>

                        <a class="nav-link" aria-current="page" href="login.html">celulares</a>

                        <a class="nav-link" aria-current="page" href="login.html">Tv e Vídeo</a>

                    </table>
                </div>

                <div class="col-md-8 col-12">
                    <div>
                        <img src="imagens do site/PRODUTOS/NOTEBOOK.jpeg" class="img-fluid"><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere corrupti minus quaerat ratione consequuntur? Iusto dolor, dolorum hic perferendis laudantium
                        velit! Ea accusamus dolor inventore sapiente, expedita accusantium officia.
                    </div>
                </div>

                <div class="col-md-2 col-12">
                    <div class="areadeslide">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner " >
                          <div class="carousel-item active">
                            <img src="imagens do site/PRODUTOS/ALEXA.jpeg" class="d-block w-100" alt="100px">
                          </div>
                          <div class="carousel-item">
                            <img src="imagens do site/PRODUTOS/Controle universal IR.jpeg" class="d-block w-100" alt="100px">
                          </div>
                          <div class="carousel-item">
                            <img src="imagens do site/PRODUTOS/IPHONE SE.jpeg" class="d-block w-100" alt="100px">
                          </div>
                        </div>
                      </div>
                </div>
                
            </div>
        </div>
    </div>

    <section id="propaganda1" class="container-fluid">
        <div class="row">
            <div class="col-md-1 col-12"></div>
            <div class="col-md-2 col-12">
                <img src="imagens do site/img/p1.jpg" class="img-fluid">
            </div>

            <div class="col-md-2 col-12">
                <img src="imagens do site/img/p2.jpg" class="img-fluid">
            </div>

            <div class="col-md-2 col-12">
                <img src="imagens do site/img/p3.jpg" class="img-fluid">
            </div>

            <div class="col-md-2 col-12">
                <img src="imagens do site/img/produto01.jpg" class="img-fluid">
            </div>

            <div class="col-md-2 col-12">
                <img src="imagens do site/img/produto02.jpg" class="img-fluid">
            </div>
            <div class="col-md-1 col-12"></div>
        </div>
    </section>

    <section id="demonstracao1 ">
        <div class="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum veritatis accusamus aperiam tempora! Odio neque cum iure suscipit laborum nemo, aperiam sint, nobis possimus tempore dolor delectus laudantium quia. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Itaque aspernatur, eos facere ea modi consectetur sunt libero! Consectetur, molestiae ullam quas laborum nostrum quis impedit dolores! Assumenda voluptatum nobis tempore. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Incidunt repellendus corrupti ea quae tempore quod magnam doloremque rem. Cumque minus illum modi delectus velit obcaecati nobis maiores veritatis eveniet molestias
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum veritatis accusamus aperiam tempora! Odio neque cum iure suscipit laborum nemo, aperiam sint, nobis possimus tempore dolor delectus laudantium quia.</p>
        </div>
    </section>

    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/ALEXA.jpeg" class="img-fluid">
                </div>

                <div class="col-md-4 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/AMPLIFICADOR.jpeg" class="img-fluid">
                </div>

                <div class="col-md-4 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/CAMERA DE AÇÃO.jpeg" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <section id="eletronicos" class="">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h1>
                        Eletronicos
                    </h1>
                </div>
                <div class="col-md-3 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/IPHONE SE.jpeg" class="img-fluid">
                </div>

                <div class="col-md-3 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/IPOD FRENTE.jpeg" class="img-fluid">
                </div>

                <div class="col-md-3 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/OCULOS VR.jpeg" class="img-fluid">
                </div>

                <div class="col-md-3 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/NOTEBOOK.jpeg" class="img-fluid">
                </div>

                <div class="col-md-3 col-6 bg-white text-center py-4">
                    <img src="imagens do site/PRODUTOS/S9+.jpeg" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <section id="demonstracao2">
    </section>
    <section id="contatoMap" class="container bg-white">
        <div class="row">
            <div class="col-md-6 col-12">
                <h2 class="text-center text-uppercase">Inscreva-se e Receba<br>nossas promoções!</h2>
                <form>
                    <div class="form-group">
                        <label for="" class="form-label"></label>
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>
                    <div class="row pt-4">
                        <div class="form-group col-8">
                            <!-- <label for="" class="form-label"></label> -->
                            <input type="text" class="form-control" placeholder="E-mail ou telefone">
                        </div>

                        <div class="form-group col-4">
                            <!-- <label for="" class="form-label"></label> -->
                            <button type="button" class="btn btn-danger form-control">Submit</button>
                        </div>
                    </div>
                </form>
                <div class="row text-center pt-2">
                    <div class="col-6">
                        <a href="https://www.instagram.com/bololandmx/" class="nolink">
                            <i class="bi bi-instagram icon"></i>
                            <b class="fontIcon"> @bololand</b>
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="https://api.whatsapp.com/send?l=pt-BR&phone=5521981766143&text=Oi" class="nolink">
                            <i class="bi bi-whatsapp icon"></i>
                        </a>
                        <a href="tel:+55 21 5555-55555" class="nolink">
                            <!-- <i class="bi bi-whatsapp icon"></i> -->
                            <b class="fontIcon"> (21)5555-55555</b>
                        </a>
                    </div>
                </div>
           
            <div class="col-md-6 col-12">
            </div>https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2584.1478118994096!2d-46.59717141063949!3d-23.65675093718646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1643415486843!5m2!1spt-BR!2sbr

                <iframe src="" width="99%" height="250" style="border:0;"
                    allowfullscreen="" loading="lazy">
                </iframe>
                <div class="text-center">
                    <b>Venha nos visitar ou peça que entragamos!<br> Avenida Presidente Vargas, 000, Rio de Janeiro -RJ</b>
                </div>
            </div>
        </div>
    </section>
    <section id="areaSocial">
        <div>
            <img src="imagens do site/redes socias/facebook.png" class="icone">
        </div>
    </section>

    <div id="center" class="col-12">
        Todos direitos reservados
    </div>

   <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script> -->

  </main>

 
</template>


<script>
// @ is an alias to /src -- "@" é um atalhos para a pasta principal do projetos "/src"
import HeaderPage from "@/components/HeaderPage.vue";
import NavbarPage from "@/components/NavbarPage.vue";

export default {
  //name: "PrincipalPage", //Podemos Apagar por que vamos usar o nome do arquivo.
  components: {
    HeaderPage,
    NavbarPage,
  },
};
</script>


<style scope>
/* 
Fonte: https://fonts.google.com/specimenTab?standard-styles#about
*/

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#propaganda2,
#propaganda3,
#propaganda4 {
  padding: 0;
  background-image: url(@/assets/img/ESCAMBO.png);
  width: 100%;
  height: 100%;
  min-height: 250px;
}

/* Corpo */

body {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  /*16px*/
  background-color: #a0affb;
}

/* Areas */

section {
  height: 100%;
  min-height: 250px;
  padding: 80px 0;
}

.slides {
  min-height: 500px;
  background-size: cover;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.logo img {
  max-height: 200px;
}

.produtos {
  border-radius: 5px;
  border: solid 1px #bbb;
}

.produtos input,
.produtos button {
  border-radius: 5px;
  border: solid 1px #bbb;
  padding: 5px;
}

.vertical {
  display: table-cell;
  vertical-align: middle;
}

.border-circle {
  border-radius: 25px;
}
.imgSocial {
  padding: 30px;
}

.conteudoCentro {
  height: 100%;
  min-height: 250px;
}

.respansive {
  width: 100%;
}

.listLink {
  text-decoration: none;
  list-style: none;
}

.btnVoltar {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  font-size: 2em;
  /* border: solid 3px;
    border-radius: 50px; */
}

.btnVoltar a {
  text-decoration: none;
}

a {
  color: #555;
}

.nolink {
  text-decoration: none;
  color: inherit;
}

.icon {
  /*32px*/
  font-size: 2em;
}

.fontIcon {
  font-size: 1.2em;
}

.copyRight {
  font-size: 0.8em;
  text-align: right;
}

footer {
  font-size: 0.9em;
}

footer h4 {
  font-size: 0.9em;
  font-weight: bold;
}

/* Media */

@media screen and (max-width: 768px) {
  .retirarElemento {
    display: none;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
  .imgSocial {
    padding: 20px;
  }
}

</style>
