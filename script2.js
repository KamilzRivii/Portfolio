const images = {
	img_weather: 'img/weather_app.gif',
	weather_info:
		'Weather App - this is an application that uses "live data" in the form of an API, in which, after entering a specific city, the program generates the amount of harmful substances in the air. In addition, the first value is the overall air quality factor. Each substance has a precise scale that helps to determine whether there is too much of a given substance in the air.',
	img_pokemon: 'img/pokemon.gif',
	pokemon_info:
		'Pokemon App is an application based on the rules of playing puns. The board consists of 12 facedown pictures in which there are pairs of similar pokemons, the goal of the game is to reverse the same pair in one move, which results in scoring a point. To make the game more difficult, each of the 3 levels of the game is equipped with a timer. The next levels contain different Pokemon and less time to turn.',
	img_shop: 'img/shop.gif',
	shop_info:
		'Shop App - this is one of my first projects written in JavaScript. The application resembles shopping in an online store where we can add our products, in this case cakes and pies, to the order basket. This basket can be modified by removing and adding new products. Buy and clear order options are also available.',
	img_todo: 'img/todo.gif',
	todo_info:
		'Todo App is an application that helps you organize your time, work and goals. The program allows you to add planned activities that we can easily track. You can also mark a task as done or delete a specific action.',
};

const weatherCheck = document.getElementById('weather_click');
const pokemonCheck = document.getElementById('pokemon_click');
const shopCheck = document.getElementById('shop_click');
const todoCheck = document.getElementById('todo_click');

weatherCheck.addEventListener('click', () => {
	document.getElementById('gif').src = images.img_weather;
	document.getElementById('gif_info').innerHTML = images.weather_info;
});
pokemonCheck.addEventListener('click', () => {
	document.getElementById('gif').src = images.img_pokemon;
	document.getElementById('gif_info').innerHTML = images.pokemon_info;
});
shopCheck.addEventListener('click', () => {
	document.getElementById('gif').src = images.img_shop;
	document.getElementById('gif_info').innerHTML = images.shop_info;
});
todoCheck.addEventListener('click', () => {
	document.getElementById('gif').src = images.img_todo;
	document.getElementById('gif_info').innerHTML = images.todo_info;
});
