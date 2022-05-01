<template>
  <header>
    <div class="logo">
      <img
        src="@/assets/ESCAMBO.png"
       
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped>
header {
  background-image: url(@/assets/img/ESCAMBO.png);
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 230px;
  /* text-align: center; */
  /* padding: 60px; */
}
</style>