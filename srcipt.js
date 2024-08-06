	let firstName;
	let lastName;
	let middleName;
	let age = parseInt ( prompt ("Сколько Вам лет?"));
	let gender = confirm ("Нажмите 'ДА' если Вы мужчина, нажмите 'ОТМЕНА' если Вы женщина");
	let genderExp = (gender ? 'мужчина' : 'женщина');
	let pens;

	if (gender) {
		if (age >= 60) {
			pens = 'Вы на пенсии';
		} else (pens = 'Вы не на пенсии');
	} else  {
		if (age >= 58) {
			pens = 'Вы на пенсии';
		} else (pens = 'Вы не на пенсии');}

		do {
		lastName = prompt ("Как Ваше имя?");
		} while (lastName === "" || lastName === null);
		
		do {
		firstName = prompt ("Как Ваше фамилия?");
		} while (firstName === "" && firstName === null);
		
		do {
		middleName = prompt ("Как Ваше отчество?");
		} while (middleName === "" && middleName === null);

		alert (`
ваше ФИО: ${lastName} ${firstName} ${middleName} 
ваш возраст в годах: ${age}
ваш возраст в днях: ${age*365}
через 5 лет вам будет: ${age+5}
ваш пол: ${genderExp}
вы на пенсии: ${pens}
`);