<template>
  <div class="home">


    <ListTasks
    v-if="$store.state.tasks.length">
    </ListTasks>

    <NoTask v-else></NoTask>

    <DragButton
    v-if="$store.state.showDrag"
    ></DragButton>

  </div>
</template>

<script>
import ListTasks from '@/components/ListTasks.vue'
import NoTask from '@/components/NoTask.vue'
import DragButton from '@/components/DragButton.vue'

  export default {
    name: 'Home',
    components: {
      ListTasks,
      NoTask,
      DragButton
    },
    data(){
      return{
      }
    },
    methods:{
     editTask(){
      if(this.item.title == "Edit"){
        dialog == true
      }
     }
    },
    computed: {
      filterList(){
        let that = this
        return this.tasks.filter(task => {
          return task.title.indexOf(that.filter) !== -1
        })
      }
    }

  }
</script>
