<template>
  <div >
        <v-list-item
        @click="$store.dispatch('taskDone', task.id)"
        :class="{ 'cyan lighten-5' : task.done,  }"
        class="pt-1 px-2 white"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="cyan darken-2"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
              :class="{'text-decoration-line-through': task.done}"
              >{{ task.title }}</v-list-item-title>
              <v-list-item-action v-if="task.dueDate" class="ma-0">
              <v-list-item-action-text>
                <v-icon small>mdi-calendar</v-icon>
                {{ task.dueDate | niceDate }}
              </v-list-item-action-text>
            </v-list-item-action>
            </v-list-item-content>


          <v-list-item-icon class="mt-2 mb-2">
          <v-btn
          @click.stop="dialogs.delete = true"
          icon
          large
          >
          <v-icon>
          mdi-trash-can
          </v-icon>
        </v-btn>
    </v-list-item-icon>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="cyan darken-2"
          large
          v-bind="attrs"
          v-on="on"
          >
          <v-icon>
            mdi-book-edit-outline
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-list-item-action v-if="$store.state.showDrag" class="ma-0">
      <v-btn
          icon
          color="cyan darken-2"
          large
          class="handle"
          >
          <v-icon>
            mdi-drag-horizontal
          </v-icon>
        </v-btn>
    </v-list-item-action>
  </template>

        </v-list-item>


        <v-divider></v-divider>

    <DeleteDialog
    v-if="dialogs.delete" :task="task"
    @close="dialogs.delete = false"
    ></DeleteDialog>

    <DialogEdit
    v-if="dialogs.edit" :task="task"
    @close="dialogs.edit = false"
    ></DialogEdit>

    <DueDate
    v-if="dialogs.dueDate" :task="task"
    @close="dialogs.dueDate = false"
    ></DueDate>

</div>
</template>

<script>
import { format } from 'date-fns'
import DeleteDialog from '@/components/DeleteDialog.vue'
import DialogEdit from '@/components/DialogEdit.vue'
import DueDate from '@/components/DueDate.vue'
export default {
  props: [
   'task'
  ],
  filters: {
    niceDate(value){
      return format(new Date(value), 'MMM d')
    }
  },
  data(){
      return{
      dialogs:{
        delete: false,
        edit: false,
        dueDate: false
      },
      items: [
        { title: 'Edit',
          click(){
            this.dialogs.edit = true
          }
        },
        { title: 'Move',
          click(){
            if(!this.$store.state.search){
            this.$store.commit('toggleDragbar')
            }
            else{
              this.$store.commit('showSnackbar' , 'Can not sort while filtering')
            }
          }
        },
        { title: 'Due Date',
          click(){
            this.dialogs.dueDate = true
          }
        }
      ]
    }
  },
  methods: {
    handleClick(index){
      this.items[index].click.call(this)
    }
  },
  components: {
    DeleteDialog,
    DialogEdit,
    DueDate
  }
}
</script>

<style>
.sortable-ghost{
  opacity:0;
}
</style>
