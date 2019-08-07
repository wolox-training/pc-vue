<template lang="pug">
  .register
    .header
      img.logo(alt='Wolox logo' src='../assets/logo.png')
      h1.title BOOKS
    .main
      form.form(@submit.prevent='onSubmit')
        .field(v-for='(field, name) in fields' :key='name')
          label.label(
            :for='name'
          )
            | {{ $t(`register['${name}']`) }}
          input.input(:id='name' v-model='field.value' :type='field.type' :errors='submitError && $v.fields[name] && $v.fields[name].value')

          .error(v-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.required) !== "undefined" && !$v.fields[name].value.required') {{ $t("errors.validation.required") }}
          .error(v-else-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.email) !== "undefined" && !$v.fields[name].value.email') {{ $t("errors.validation.email") }}
          .error(v-else-if='submitError && $v.fields[name] && $v.fields[name].value && typeof($v.fields[name].value.$params.password) !== "undefined" && !$v.fields[name].value.password') {{ $t("errors.validation.password") }}
        button.button.submit-button(type="submit") {{ $t("register.signUp") }}
      button.button.secondary-button(type="button") {{ $t("register.login") }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { passwordValidation as password } from '@/utils/validations'
import { createUser } from '@/services/userService'

export default {
  name: 'register',
  data () {
    return {
      fields: {
        firstName: { value: null },
        lastName: { value: null },
        email: { value: null },
        password: { value: null, type: 'password' }
      },
      submitError: false,
      validateErrors: ['required', 'email', 'password']
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitError = true
      } else {
        const { firstName, lastName, email, password } = this.fields
        this.submitError = false
        createUser(firstName.value, lastName.value, email.value, password.value)
      }
    }
  },
  validations: {
    fields: {
      email: { value: { required, email } },
      password: { value: { required, password } }
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
    padding: 10px 0;
    position: relative;
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

  .error {
    position: absolute;
    font-size: 12px;
    color: $red;
    bottom: -5px;
  }
</style>
