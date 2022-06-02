const FETCH_OPTIONS = {
	method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': '7283b4c7dbmsh7500771d9d70491p1e0e32jsn1d1b7327e70c'
		}
};

export async function get(city) {
	if (city === "") {
		const body = {};
		return {
			status: 400,
			body
		}
	}
	const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, FETCH_OPTIONS);

	const data = await response.json();

	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { text, icon } = condition;

	const body = {
		conditionText: text,
		conditionIcon: icon,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};
	
	return {
		status: 200,
		body
	};
}
