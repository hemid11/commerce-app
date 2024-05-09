import * as yup from 'yup';

const userSchema = yup.object().shape({
  username: yup.string().min(3).required(),
  password: yup.string().min(5).matches(/[a-z]/).matches(/[A-Z]/).matches(/[0-9]/).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  email: yup.string().email().required(),
  profileImg: yup.string().url().required(),
  balance: yup.number().positive().integer().required()
});

export default userSchema;
