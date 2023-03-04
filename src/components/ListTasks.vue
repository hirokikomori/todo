<template>
  <v-list
      subheader
      two-line
      flat
      class="px-2"
    >
    <draggable :list="$store.getters.taskFiltered" item-key="no" handle=".handle">
    <IndivisualTask
    v-for="task in $store.getters.taskFiltered"
        :key="task.id"
        :task="task"
    ></IndivisualTask>
    </draggable>

    </v-list>
</template>

<script>
import draggable from 'vuedraggable'

import IndivisualTask from '@/components/IndivisualTask.vue'
export default {
    components:{
      IndivisualTask,
      draggable
    }
}
</script>

<style>

</style>
