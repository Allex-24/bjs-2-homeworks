"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let dicriminant = b ** 2 - 4 * a * c;

	if (dicriminant < 0) {
		return arr;
	} else if (dicriminant === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else {
		let root1 = (-b + Math.sqrt(dicriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(dicriminant)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // проверяем, что все аргументы являются числами
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  // преобразуем процентную ставку в месячную
  let monthlyPercent = percent / 100 / 12;

  // вычисляем тело кредита
  let loanBody = amount - contribution;

  // вычисляем ежемесячный платеж
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  // вычисляем общую сумму, которую придётся заплатить клиенту
  let totalAmount = monthlyPayment * countMonths;

  // округляем результат до двух значений после запятой
  totalAmount = +totalAmount.toFixed(2);

  // возвращаем результат
  return totalAmount;
}

