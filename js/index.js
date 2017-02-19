"use strict";

function getDaysOfTheMonth(year, month) {
	month -= 1;

	var result = "нет такого месяца";

	if (month === 1) {
		var monthFeb = new Date(year,month,29);
		result = monthFeb.getMonth() === month ? 29 : 28
	} else if (month < 12 && month >= 0) {
		var otherMonths = new Date(year,month,31);
		result = otherMonths.getMonth() === month ? 31 : 30
	}

	return result;
}

var buttonTest = document.getElementById('tests');
	buttonTest.onclick = getDaysOfMonth_Tests;

function getDaysOfMonth_Tests() {
    console.log('тест: год - 2012 ,месяц - февраль -> в феврале 29 дней');
    var date = getDaysOfTheMonth(2012, 2);
    console.log((date == 29) ? 'пройден' : 'НЕ ПРОЙДЕН!');

	console.log('тест: год - 2016 ,месяц - февраль -> в феврале 29 дней');
    var date = getDaysOfTheMonth(2016, 2);
    console.log((date == 29) ? 'пройден' : 'НЕ ПРОЙДЕН!');

    console.log('тест: год - 2012 ,месяц - февраль -> в феврале 29 дней');
    var date = getDaysOfTheMonth(2012,2);
    console.log((date == 29) ? 'пройден' : 'НЕ ПРОЙДЕН!'); 

    console.log('тест: год - 2017 ,месяц - февраль -> в феврале 28 дней');
    var date = getDaysOfTheMonth(2017,2);
    console.log((date == 28) ? 'пройден' : 'НЕ ПРОЙДЕН!');

    console.log('тест: год - 1812 ,месяц - февраль -> в феврале 29 дней');
    var date = getDaysOfTheMonth(1812,2);
    console.log((date == 29) ? 'пройден' : 'НЕ ПРОЙДЕН!');

	console.log('тест: год - 2008 ,месяц - июль -> в июле 31 дней');
    var date = getDaysOfTheMonth(2008,7);
    console.log((date == 31) ? 'пройден' : 'НЕ ПРОЙДЕН!');

    console.log('тест: год - 2001 ,месяц - декабрь -> в декабре 31 дней');
    var date = getDaysOfTheMonth(2001,12);
    console.log((date == 31) ? 'пройден' : 'НЕ ПРОЙДЕН!');

    console.log('тест: год - 1968 ,месяц - март -> в марте 31 дней');
    var date = getDaysOfTheMonth(2001,12);
    console.log((date == 31) ? 'пройден' : 'НЕ ПРОЙДЕН!');

}