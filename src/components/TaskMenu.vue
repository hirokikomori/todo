<template>
  <div>
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

    <dialog-edit
    v-if="dialogEdit" :edit="edit"
    ></dialog-edit>


</div>
</template>

<script>
export default {
  components:{
    'dialog-edit' : require('@/components/DialogEdit.vue').default,
  },
  data(){
    return{
      dialogEdit: false,
      items: [
        { title: 'Edit',
          click(){
            this.dialogEdit = true
          }
        },
        { title: 'Move'
        },
        { title: 'Due Date'
        }
      ]
    }
  },
  methods: {
    handleClick(index){
      this.items[index].click()
    }
  }
}
</script>

<style>

</style>
