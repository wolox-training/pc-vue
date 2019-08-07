import VueI18n from 'vue-i18n'

const messages = {
  en: {
    register: {
      signUp: 'Sign up',
      login: 'Login',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      password: 'Password'
    },
    errors: {
      validation: {
        required: 'This field is required',
        password: 'Must contain an uppercase letter and a number',
        email: 'This field must have email format'
      }
    }
  },
  es: {
    register: {
      signUp: 'Registrarse',
      login: 'Ingresar',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo electrónico',
      password: 'Contraseña'
    },
    errors: {
      validation: {
        required: 'Este campo es requerido',
        password: 'Debe contener una mayúscula y un número',
        email: 'Este campo debe tener formato de email'
      }
    }
  }
}

export default new VueI18n({
  locale: 'en',
  messages
})
