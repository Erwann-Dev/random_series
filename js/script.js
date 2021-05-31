function serie_random(id) {
	var key = '3a1dd21b1318e5d4bd73b5b9b3bd7e74';
	reset();
	var id = id;
	var name = '';
	var resultat = '';
	function random() {
		var settings = {
			async: false,
			url: 'https://api.themoviedb.org/3/tv/' + id + '?api_key=' + key,
			method: 'GET',
		};

		$.ajax(settings).done(function (response) {
			season_alea = Math.floor(Math.random() * response.seasons.length);
			name = response.original_name;
		});
		var settings_2 = {
			async: false,
			url:
				'https://api.themoviedb.org/3/tv/' +
				id +
				'/season/' +
				season_alea +
				'?api_key=' +
				key,
			method: 'GET',
		};
		$.ajax(settings_2).done(function (response) {
			episode_alea = Math.floor(Math.random() * response.episodes.length) + 1;
		});
		var settings_3 = {
			async: false,
			url:
				'https://api.themoviedb.org/3/tv/' +
				id +
				'/season/' +
				season_alea +
				'/episode/' +
				episode_alea +
				'?api_key=' +
				key,
			method: 'GET',
		};

		$.ajax(settings_3).done(function (response) {
			resultat = response.name;
		});
		resultat =
			name +
			' : Saison : ' +
			season_alea +
			' Episode : ' +
			episode_alea +
			' Titre : ' +
			resultat;
		return resultat;
	}
	doctor = document.querySelector('.Doctor_Who');
	resultat = random();
	doctor.innerHTML = resultat;
}

function reset() {
	psg = document.querySelector('.SG-1');
	patlantis = document.querySelector('.Atlantis');
	puniverse = document.querySelector('.Universe');
	pdoctor = document.querySelector('.Doctor_Who');
	pserie = document.querySelector('.Serie');
	pcustom = document.querySelector('.Custom');

	pcustom.innerHTML = '';
	pserie.innerHTML = '';
	psg.innerHTML = '';
	patlantis.innerHTML = '';
	puniverse.innerHTML = '';
	pdoctor.innerHTML = '';
}

function generate() {
	serie = Math.floor(Math.random() * 4) + 1;
	reset();
	console.log('Serie : ' + serie);
	if (serie == 1) {
		serie_random(57243);
	} else if (serie == 2) {
		serie_random(5148);
	} else if (serie == 3) {
		serie_random(2290);
	} else if (serie == 4) {
		serie_random(4629);
	} else if (serie == 5) {
		window.alert('WTF 5 !!!!');
	}
}
