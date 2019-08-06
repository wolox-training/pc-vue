import { helpers } from 'vuelidate/lib/validators'

export const passwordValidation = password => !helpers.req(password) || (/[A-Z]/.test(password) && /\d/.test(password))
