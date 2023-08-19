import axios from 'axios'

const client =axios.create( {
  baseURL: 'https://',
  validateStatus: (status) => status >= 200 && status < 300,
})
const baseService = async (options) => {
  const onSuccess = (response) => {
    return Promise.resolve(response)
  }
  const onError = (error) => {
    const errorResponse =
      error &&
      error.response &&
      error.response.data &&
      error.response.data.response
    if (errorResponse && typeof errorResponse !== 'undefined') {
      return Promise.reject(errorResponse.result)
    }
    return Promise.reject((error && error) || errorResponse.result)
  }
  try {
    const response = await client({ ...options })
    return onSuccess(response)
  } catch (err) {
    return onError(err)
  }
}
export default baseService
