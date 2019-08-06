import api from '../config/api'

export const createUser = (firstName, lastName, email, password) => api.post('/users', { user: { email, password, password_confirmation: password, first_name: firstName, last_name: lastName, locale: 'es' } })
