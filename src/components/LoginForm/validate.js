export default function validate(formValues) {
  const errors = {};
  if (!formValues.userName) {
    errors.userName = 'Введите имя пользователя';
  }
  if (!formValues.password) {
    errors.password = 'Введите пароль';
  }
  if (formValues.userName !== 'Admin') {
    errors.userName = 'Имя пользователя введено не верно';
  }
  if (formValues.password !== '12345') {
    errors.password = 'Пароль введен не верно';
  }
  return errors;
}