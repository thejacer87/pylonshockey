<script setup lang="ts">
  const { data: players } = await useAsyncData("players", () =>
    queryContent(`/players`).find()
  );
</script>

<template>
  <div>
    <li v-for="player in players" :key="player.slug">
      <NuxtLink :to="`/players/${player.slug}`"
        >{{ player.first_name }} {{ player.last_name }}</NuxtLink
      >
    </li>
  </div>
</template>
