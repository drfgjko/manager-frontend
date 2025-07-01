import { inject } from 'vue'

export const register = (formData) => {
  const request = inject('request')

  if (!request) {
    throw new Error('Request instance is not provided!')
  }

  return request.post('/register', formData)
}

export const login = (formData) => {
  const request = inject('request')

  if (!request) {
    throw new Error('Request instance is not provided!')
  }

  return request.post('/login', formData)
}
