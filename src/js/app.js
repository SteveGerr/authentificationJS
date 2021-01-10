import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';

const { form, inputEmail, inputPassword } = UI;

const inputs = [inputEmail, inputPassword]

//Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
// Перебираем все инпуты, вешаем слушатель фокуса и
// вызываем функцию удаления сообщения с ошибкой, передавая туда текущщий инпут
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))

//Handlers
function onSubmit() {
  // Ежели хотя бы один элемент невалиден, функция every вернёт false

  //Перебираем массив инпутов
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);

    // Ежели инпут невалиден, выводим сообщение об ошибке
    showInputError(el);

    return isValidInput;
  });

  console.log(isValidForm);
}