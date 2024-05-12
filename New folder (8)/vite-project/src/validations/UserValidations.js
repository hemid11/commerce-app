import * as yup from 'yup';

const UserSchema = yup.object().shape({
  username: yup.string().min(3).required(),
  password: yup.string().min(5).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number').required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  email: yup.string().email().required(),
  profileImg: yup.string().url().required(),
  balance: yup.number().positive().integer().required()
});

export default UserSchema;
