import moment from "moment"

export const validateCpf = (cpf) => {
  if (typeof cpf !== 'string') return false
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
  cpf = cpf.split('')
  const validator = cpf
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map(el => +el)
  const toValidate = pop => cpf
    .filter((digit, index, array) => index < array.length - pop && digit)
    .map(el => +el)
  const rest = (count, pop) => (toValidate(pop)
    .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11 % 10
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
}

export const validateDate = (date) => {
  if (date) {
    const arrDate = date.split('/')
    const formatedDate = arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0]
    const m = moment(formatedDate, 'YYYY-MM-DD')
    const todayDate = new Date()
    const today = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate()
    const maxDate = (todayDate.getFullYear() - 100) + '-' + todayDate.getMonth() + '-' + todayDate.getDate()

    const afterDate = moment(formatedDate, 'YYYY-MM-DD').isAfter(today)
    const beforeDate = moment(formatedDate, 'YYYY-MM-DD').isBefore(maxDate, 'YYYY-MM-DD', 'year')

    return m.isValid() && !afterDate && !beforeDate && formatedDate.length == 10 ? true : false
  }
}