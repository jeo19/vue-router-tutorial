<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'Home' }">Link1 Click</router-link>
    <p />
    <router-link :to="{ name: 'About' }">Link2 Click</router-link>
  </div>
</template>
