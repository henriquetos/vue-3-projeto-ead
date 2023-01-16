<template>
  <li>
    <span :class="['card', 'bg-' + bgName]">
      <span class="icon">
        <img :src="[image != '' ? image : require('@/assets/images/icons/default.png')]" :alt="title" /> <!-- checo se a imagem existe, se não vai a imagem padrão -->
      </span>
      <span class="title">{{ title }}</span> <!-- title da props -->
      <span class="action">
        <!-- <a href="trainings.html" :class="['btn', bgName]">Acessar</a> -->
        <router-link :to="{name: 'campus.modules'}" :class="['btn', bgName]"> Acessar </router-link> 
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>

<script>
export default {
    name: "CardCourse",

    props: ['title', 'image', 'bgName']
};
</script>