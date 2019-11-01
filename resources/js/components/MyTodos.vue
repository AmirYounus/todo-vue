<template>
  <div class="container">
  <div class="notification">
    <article class="panel is-primary">
      <p class="panel-heading">
        Todos
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search" v-model="search" >
          <span class="icon is-left">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>

      <div v-if="temp.length > 0">
          <div class="panel-block" v-for="todo of temp" :key="todo.name">
            <span class="column is-10">
              {{ todo.name }}
            </span>
              <span class="icon has-text-info column is-1">
                <i class="fa fa-trash" @click='remove(todo.id)'></i>
              </span>
              <span class="icon has-text-info column is-1">
                <router-link :to="{ name: 'todo', params: { id: todo.id } }"><i class="fa fa-pencil"> </i></router-link>
              </span>
          </div>
      </div>
      <div v-else>
        <div class="panel-block">
          <span class="column is-12 has-text-centered	is-size-4-fullhd">
            <h1>No todos</h1>
          </span>
        </div>
      </div>
    </article>

    <div class="pull-right">
        <router-link to="/todo" class="button is-primary is-right">
          Add Todo
        </router-link>
    </div>
  </div>
  
</div>

</template>

<script>
export default {
    methods:{
      remove(id){
        if(confirm('Are You Sure?')) {
            axios.delete(`/todos/${id}`)
            .then(response => {
              if(response.status)
              {
                this.todos = this.temp = response.data.data
              }
            })
            .catch(e => {
              this.errors = e.response.data.errors
            })
        }
      },
    },
    mounted(){
      axios.get('/todos')
      .then(response => {
        this.todos = this.temp = response.data.data
      })
      .catch(e => {
        // this.errors.push(e)
      })
    },

    data() {
      return {
        todos: {}, 
        search: '',
        temp: '',
      }
  },
  watch:{
    search() {
      if (this.search.length > 0) {
        this.temp = this.todos.filter((item) => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        });
      } else {
        this.temp = this.todos
      }
    }
  }
}
</script>