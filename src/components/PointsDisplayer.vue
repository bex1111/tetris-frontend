<template>
  <div>
    <span>Username: {{ userPoints.username }}<br>
      All point: {{ userPoints.points }}</span>
  </div>
</template>

<script>
export default {
  name: 'PointsDisplayer',
  props: ['userPoints'],
}
</script>

<style scoped>
div {
  padding-right: 5px;
  margin-left: 5px;
  border-right: 1px solid black;
}
</style>
