import { check } from 'express-validator';
import { emailRegex, passwordRegex, phoneRegex, userNameRegex } from './regex';

export const registrationValidation = [
    check('userName', 'userName is in incorrect type').trim().matches(userNameRegex),
    check('email', 'email is in incorrect type').trim().matches(emailRegex),
    check('phoneNumber', 'phoneNumber is in incorrect type').trim().matches(phoneRegex),
    check('password', 'password is in incorrect type').trim().matches(passwordRegex),
];
