<template>
      <v-text-field
          label="Add Todo"
          class="pa-4 field-add-task"
          clearable
          hide-details
          v-model="newTaskTitle"
          outlined
          background-color="rgba(255,255,255,0.1)"
    >

    <template v-slot:append>
      <v-icon
      @click="taskAdd"
      :disabled="!newTaskTitle"
      >
      mdi-plus
      </v-icon>
    </template>

    </v-text-field>
</template>

<script>
export default {
  data(){
      return{
        newTaskTitle:'',
      }
    },
    methods:{
      taskAdd(){
        // console.log('addtask')
        this.$store.dispatch('taskAdd', this.newTaskTitle)
        this.newTaskTitle = ''
      },
    }
}
</script>

<style>
.field-add-task.v-input--is-focused .v-input__slot{
  background-color:rgba(71, 114, 146, 0.5)!important;
}
</style>
