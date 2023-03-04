<template>
  <div class="text-center">
    <v-dialog
      :value="true"
      max-width="300"
      persistent
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         Delete Task?
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-text>
          Are you sure to delete this task?
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$store.dispatch('taskDelete', task.id)"
          >
            Yes
          </v-btn>
          <v-btn
            text
            @click="$emit('close')"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style>

</style>
