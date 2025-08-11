import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Nieprawidłowy adres e-mail')
    .required('Adres e-mail jest wymagany'),
  password: yup
    .string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .required('Hasło jest wymagane'),
})

export default loginSchema
