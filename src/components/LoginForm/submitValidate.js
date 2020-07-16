import { SubmissionError } from 'redux-form';
import { sessionSaver } from '../../utils/SessionSaver.js';

export default function submit(values) {
  if (values.username !== 'Admin' && values.password !== '12345') {
    throw new SubmissionError({
      username: 'Имя пользователя введено неверно',
      password: 'Пароль введен неверно',
    })
  } else if (values.username !== 'Admin') {
    throw new SubmissionError({
      username: 'Имя пользователя введено неверно',
    })
  } else if (values.password !== '12345') {
    throw new SubmissionError({
      password: 'Пароль введен неверно',
    })
  } else {
    sessionSaver.loginUser();
  }
}