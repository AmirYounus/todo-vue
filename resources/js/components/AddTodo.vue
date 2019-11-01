<template>
  <div class="container">
    <section class="hero is-primary has-margin-top-20">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              {{ this.$route.params.id ? 'Update Todo' : 'Add Todo' }}
            </h1>

          </div>
        </div>
      </section>

      <div class="field ">
        <div class="control">
          <input class="input" :class="{'is-danger':errors.name}" type="text" placeholder="Add Todo" v-model="todo.name">
          <small class="has-text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button v-if="this.$route.params.id" class="button is-primary" @click='update'>Update</button>
          <button v-else class="button is-primary" @click='save'>Save</button>
        </div>
        <div class="control">
            <router-link to="/">
              <button class="button is-link is-light">Cancel</button>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    created(){
      if(this.$route.params.id)
      {
        axios.get(`/todos/${this.$route.params.id}/edit`)
        .then(response => {
          this.todo.name = response.data.data.name
          console.log(response.data)
        })
        .catch(e => {
          // this.errors.push(e)
        })

      }
    },

  data() {
    return {
      todo:{
        name: ''
      },
      errors:{}
    }
  },
  methods:{
    save(){
        axios.post('/todos', {
          name: this.todo.name,
        })
        .then(response => {
          if(response.status)
          {
            this.$router.push('/');
          }
        })
        .catch(e => {
          this.errors = e.response.data.errors
          console.log(e.response.data)
        })
    },
    update() {
        axios.put(`/todos/${this.$route.params.id}`, {
          name: this.todo.name,
        })
        .then(response => {
          if(response.status)
          {
            this.$router.push('/');
          }
        })
        .catch(e => {
          this.errors = e.response.data.errors
          console.log(e.response.data)
        })
    }
  }
}
</script>