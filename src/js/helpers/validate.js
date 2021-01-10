const regExpDic = {
  email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,

  password: /^[0-9a-zA-Z]{4,}$/,
}


/**
 * Function validate. Check input on RegExp provided in regExpDic
 * @param {HTMLInputElement} el
 * @returns {Boolean} - return true if input valid or doesn,t has data-required attr
 */

 export function validate(el) {
  // Получаем название инпута для валидации
  const regExpName = el.dataset.required;

  // Ежели в нашем словаре regExpDic нет регулярки с именем записаным в regExpName возвращаем true
  // т.е. пропускаем этот инпут
  if (!regExpDic[regExpName]) return true;

  return regExpDic[regExpName].test(el.value)
 }


