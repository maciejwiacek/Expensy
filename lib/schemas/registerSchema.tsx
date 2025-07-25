import * as yup from 'yup'

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Imię musi mieć co najmniej 2 znaki')
    .max(50, 'Imię nie może przekraczać 50 znaków')
    .required('Imię jest wymagane'),
  email: yup
    .string()
    .email('Nieprawidłowy adres e-mail')
    .required('Adres e-mail jest wymagany'),
  password: yup
    .string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .required('Hasło jest wymagane'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Hasła muszą się zgadzać')
    .required('Potwierdzenie hasła jest wymagane'),
})

export default registerSchema
