import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDrag: false,
    search: null,
    tasks:[
      // {
      //   id:1,
      //   title: 'meeting',
      //   done: false,
      //   dueDate: '2020-10-16'
      // },
      // {
      //   id:2,
      //   title: 'lunch',
      //   done: false,
      //   dueDate: '2020-10-16'
      // },
      // {
      //   id:3,
      //   title: 'shopping',
      //   done: false,
      //   dueDate: '2020-10-17'
      // }
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  mutations: {
    setSearch(state, value){
      state.search = value
    },
    taskAdd(state, newTask){
      // if(!this.newTask) return
       state.tasks.push(newTask)
     },
     taskDone(state, id){
      let task = state.tasks.filter(task => task.id == id)[0]
      task.done = !task.done
    },
    taskDelete(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
     },
     showSnackbar(state, text){
      state.snackbar.show = true
      state.snackbar.text = text
    },
    hideSnackbar(state, text){
      state.snackbar.show = false
    },

    toggleDragbar(state){
      state.showDrag = !state.showDrag
    },

    updateTitle(state, payload){
      let task = state.tasks.filter(task => task.id == payload.id)[0]
      task.title = payload.title
    },
    updateDate(state, payload){
      let task = state.tasks.filter(task => task.id == payload.id)[0]
      task.dueDate = payload.dueDate
    },
    setTasks(state, tasks){
      state.tasks = tasks
    }
  },
  actions: {
    taskAdd({commit}, newTaskTitle){
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(newTask).then(() => {
        commit('taskAdd' , newTask)
        commit('showSnackbar', 'Task Added')
      })
    },
    taskDone({state, commit}, id){
      console.log('payload')
      let task = state.tasks.filter(task => task.id == id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done : !task.done
      }).then(()=> {
        commit('taskDone' , id)
      })
    },
    updateTitle({commit}, payload){
      db.collection('tasks').doc({ id: payload.id }).update({
        title : payload.title
      }).then(()=> {
        commit('updateTitle' , payload)
      })
    },
    updateDate({commit}, payload){
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate : payload.dueDate
      }).then(()=> {
        commit('updateDate' , payload)
      })
    },
    taskDelete({commit}, id){
      db.collection('tasks').doc({ id: id}).delete().then(()=>{
        commit('taskDelete' , id)
        commit('showSnackbar', 'Task Deleted')
      })
    },
    getTasks({commit}){
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
  },
  modules: {
  },
  getters:{
    taskFiltered(state){
      if(!state.search){
        return state.tasks
      }
      return state.tasks.filter(task => task.title.includes(state.search.toLowerCase()))
    }
  }
})
