<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-blue">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
        <!--Icone no Menu Celular-->
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#demostracao">Demostração</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#produtos">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#areaSocial">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contatoMap">Locais</a>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/logon">Entrar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/produtos">Pedidos</a>
          </li>
        </ul>

        <!-- <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarPage",
};
</script>

<style scoped>
.navbar {
  padding: 0;
}

.nav-link a {
  color: #fff !important;
}

.nav-link a:hover {
  color: #0022cc !important;
  background-color: #ffffff;
  border-bottom: solid 5px #ecdd0b;
  font-weight: bold;
}
</style>