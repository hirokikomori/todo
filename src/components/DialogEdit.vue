<template>
  <div class="text-center">
    <v-dialog
      :value="true"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit text
        </v-card-title>

        <v-card-text>
          Edit this task to...
        </v-card-text>

        <v-text-field
          class="px-6"
          v-model="taskTitle"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="blue darken-1"
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>

          <v-btn
            color="blue darken-1"
            text
            @click="saveTask"
            :disabled ="!taskTitle"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data(){
    return {
      taskTitle: null
    }
  },
  mounted(){
    this.taskTitle = this.task.title
  },
  methods:{
    saveTask(){
      let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.dispatch('updateTitle', payload)
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
