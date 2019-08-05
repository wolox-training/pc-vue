<template lang="pug">
  .register
    .header
      img.logo(alt='Wolox logo' src='../assets/logo.png')
      h1.title BOOKS
    .main
      form.form(@submit.prevent='onSubmit')
        input-field.field(v-for='(field, name) in fields' :key='name' :name='name' v-bind='field' v-model='field.value')
        button.button.submit-button(type="submit") Sign up
      button.button.secondary-button(type="button") Login
</template>

<script>

import InputField from '@/components/InputField'

export default {
  name: 'register',
  components: {
    InputField
  },
  data () {
    return {
      fields: {
        firstName: { label: 'First name', value: null },
        lastName: { label: 'Last name', value: null },
        email: { label: 'Email', value: null },
        password: { label: 'Password', value: null, type: 'password' }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(JSON.parse(JSON.stringify(this.fields)))
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';

  .register {
    background-color: $grey;
    border-top: $blue 4px solid;
    max-width: 600px;
    padding: 10px;
  }

  .header {
    padding: 20px;
  }

  .title {
    font-size: 14px;
    margin: 0;
  }

  .logo {
    width: 250px;
  }

  .main {
    padding: 0 10px;
  }

  .separator {
    background-color: $dark-grey;
    height: 2px;
    margin: 20px 0;
  }

  .field {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }

  .submit-button {
    margin: 15px 0 40px;
    position: relative;
    &::after {
      background-color: $dark-grey;
      content: '';
      height: 3px;
      left: 0;
      position: absolute;
      top: 50px;
      width: 100%;
    }
  }
</style>
