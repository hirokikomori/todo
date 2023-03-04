<template>
      <div class="no-task">
      <v-icon large color="primary">mdi-check-circle-outline</v-icon>
      <div class="text-h5 primary--text">There is no task</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.no-task{
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  opacity: 0.8;
  text-align: center;
}
</style>
