<script setup lang="ts">
  const route = useRoute();
  const playerSlug = (route.params.player as string).replace("-", "_");

  const { data: player } = await useAsyncData(playerSlug, () =>
    queryContent(`/players/${playerSlug}`).findOne()
  );
</script>

<template>
  <div>
    <pre>{{ player }}</pre>
  </div>
</template>
