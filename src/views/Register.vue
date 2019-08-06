<template lang="pug">
  .register
    .header
      img.logo(alt='Wolox logo' src='../assets/logo.png')
      h1.title BOOKS
    .main
      form.form(@submit.prevent='onSubmit')
        .field(v-for='(field, name) in fields' :key='name')
          label.label(
            v-if='field.label'
            :for='name'
          )
            | {{ field.label }}
          input.input(:id='name' v-model='field.value' :type='field.type' :errors='submitError && $v.fields[name] && $v.fields[name].value')
          .error(v-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.required) !== "undefined" && !$v.fields[name].value.required') Este campo es requerido
          .error(v-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.email) !== "undefined" && !$v.fields[name].value.email') Debe tener formato de email
          .error(v-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.password) !== "undefined" && !$v.fields[name].value.password') Debe tener formato de password
        button.button.submit-button(type="submit") Sign up
      button.button.secondary-button(type="button") Login
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { passwordValidation as password } from '@/utils/validations'

export default {
  name: 'register',
  data () {
    return {
      fields: {
        firstName: { label: 'First name', value: null },
        lastName: { label: 'Last name', value: null },
        email: { label: 'Email', value: null },
        password: { label: 'Password', value: null, type: 'password' }
      },
      submitError: false
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      console.log(this)
      if (this.$v.$invalid) {
        this.submitError = true
      } else {
        this.submitError = false
        console.log(JSON.parse(JSON.stringify(this.fields)))
      }
    }
  },
  validations: {
    fields: {
      email: { value: { required, email } },
      password: { value: { required, password } }
    }
  },
  computed () {

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
    display: flex;
    flex-direction: column;
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

  .label {
    font-size: 12px;
    font-weight: 700;
    padding-left: 5px;
  }
</style>
