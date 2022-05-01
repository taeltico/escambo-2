<template>
  <div>
    <NavbarPage />
    <section class="container">
      <h2>Produtos</h2>
      <table class="table">
        <th>ID</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Data Nasc.</th>
        <th>CPF</th>
        <th>Foto Perfil</th>
        <!-- <th>Senha</th> -->
        <th>Tel.</th>
        <th>Ativo</th>
        <tr v-for="produto in Produtos" :key="produto">
          <td>{{ produto.id }}</td>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.email }}</td>
          <td>{{ produto.data_nasc }}</td>
          <td>{{ produto.cpf }}</td>
          <td>{{ produto.foto_perfil }}</td>
          <!-- <td>{{ produto.senha }}</td> -->
          <td>{{ produto.tel }}</td>
          <td>{{ produto.ativo }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import UsuarioService from "@/services/usuario";

export default {
  components: {
    NavbarPage,
  },
  data() {
    return {
      Produtos: [],
    };
  },
  mounted() {
    this.listarUsuarios();
  },
  methods: {
    listarUsuarios() {
      UsuarioService.list().then((res) => {
        console.log(res);
        this.Produtos = res.data.result;
      });
    },
  },
};
</script>

<style>
</style>