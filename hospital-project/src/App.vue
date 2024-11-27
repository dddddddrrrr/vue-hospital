<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <header>
      <h1>健康医院</h1>
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/general-clinic">全科门诊</RouterLink>
        <RouterLink to="/emergency-service">急诊服务</RouterLink>
        <RouterLink to="/checkup-center">体检中心</RouterLink>
        <RouterLink to="/pediatric-clinic">儿科诊疗</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
header {
  background-color: #0073e6;
  text-align: center;
  padding: 1rem;
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}

main {
  padding: 2rem;
}
</style>
