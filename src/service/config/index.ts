let BASE_URL = ''
const TIME_OUT = 10000

if (import.meta.env.DEV) {
  BASE_URL = '/mock'
} else if (import.meta.env.PROD) {
  BASE_URL = '/mock'
} else {
  BASE_URL = '/test'
}

export { BASE_URL, TIME_OUT }
