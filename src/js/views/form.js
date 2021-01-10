


/**
 *
 * @param {String} msg
 */
// Генерируем шаблон сообщения
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-feedback">${msg}</div>
  `
}

/**
 *
 * @param {HTMLInputElement} el
 * el это input
 */

export function showInputError(el) {
  // Получаем родителя
  const parent = el.parentElement;
  // Выводимое сообщение в дата атрибуте инпута или дефолтное
  const msg = el.dataset.invalidMessage || 'Invalid input';

  const template = inputErrorTemplate(msg)
  // Вешаем на инпут класс ошибки
  el.classList.add('is-invalid');
  // добавляем шаблон сообщения под инпут
  // beforeend - внутрь parent, в конец
  parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function remove input error
 * @param {HTMLInputElement} el
 */

export function removeInputError(el) {
  // Получаем родителя
  const parent = el.parentElement;
  // внутри родителя получаем блок с ошибкой
  const err = parent.querySelector('.invalid-feedback');
  // Ежели ошибки нет, выходим из функции
  if (!err) return;

  el.classList.remove('is-invalid')
  // Удаляем ошибку
  parent.removeChild(err);

}