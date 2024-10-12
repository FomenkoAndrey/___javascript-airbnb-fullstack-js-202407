/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
/* eslint-disable strict */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-template */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-new-wrappers */
/* eslint-disable object-shorthand */
/* eslint-disable vars-on-top */
/* eslint-disable eqeqeq */
/* eslint-disable no-extra-semi */
/* eslint-disable semi-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

function makeArmy() {
  const shooters = [] // пустой массив

  for (let i = 0; i < 10; i++) {
    // shooter - это функция "стрелок", которая выводит свой номер i от 0 до 9
    const shooter = function () {
      console.log(i)
    }

    shooters.push(shooter) // добавляем в массив функцию
    console.log(shooters) // выводим массив функций в консоль
  }

  return shooters
}

const army = makeArmy() // получаем результа из функции makeArmy() - это массив функций "стрелок"

army[0]()
army[5]()
army[9]()
