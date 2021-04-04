function doctor_random(){
  reset()
  var id = 57243;
  function season_random(){
    var settings = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(settings.url)
      season_alea = (Math.floor(Math.random() * response.seasons.length)); 
      console.log("Saison : "+season_alea);
      console.log(response.seasons);
    });
    return season_alea;
  }

  function episode_random(season_alea){
    var settings_2 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    $.ajax(settings_2).done(function (response) {
      console.log(settings_2.url)
      episode_alea = (Math.floor(Math.random() * response.episodes.length)+1); 
      console.log("Episode : "+episode_alea);
      console.log(response.episodes);
    });
    return episode_alea;
  }

  function result(season_alea,episode_alea){
    var settings_3 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"/episode/"+episode_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }

    $.ajax(settings_3).done(function (response) {
      console.log(settings_3.url)
      console.log(response.name);
      resultat = response.name
    });
    return resultat;
  }

  var season_alea;
  var season_result = season_random();
  console.log("var season : "+season_result);
  while (season_result == 0 || season_result == 13){
    season_result = season_random();
  }
  console.log("var season : "+season_result);
  var episode_result = episode_random(season_result);
  console.log("var episode : "+episode_result);
  var title = result(season_result,episode_result)
  doctor = document.querySelector(".Doctor_Who")
  doctor.innerHTML = ("Doctor Who : Saison : "+season_result+" Episode : "+episode_result+" Titre : "+title)
}

function universe_random(){
  reset()
  var id = 5148;
  function season_random(){
    var settings = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(settings.url)
      season_alea = (Math.floor(Math.random() * response.seasons.length)); 
      console.log("Saison : "+season_alea);
      console.log(response.seasons);
    });
    return season_alea;
  }

  function episode_random(season_alea){
    var settings_2 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    $.ajax(settings_2).done(function (response) {
      console.log(settings_2.url)
      episode_alea = (Math.floor(Math.random() * response.episodes.length)+1); 
      console.log("Episode : "+episode_alea);
      console.log(response.episodes);
    });
    return episode_alea;
  }

  function result(season_alea,episode_alea){
    var settings_3 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"/episode/"+episode_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }

    $.ajax(settings_3).done(function (response) {
      console.log(settings_3.url)
      console.log(response.name);
      resultat = response.name
    });
    return resultat;
  }

  var season_alea;
  var season_result = season_random();
  console.log("var season : "+season_result);
  while (season_result == 0){
    season_result = season_random();
  }
  console.log("var season : "+season_result);
  var episode_result = episode_random(season_result);
  console.log("var episode : "+episode_result);
  var title = result(season_result,episode_result)
  Universe = document.querySelector(".Universe")
  Universe.innerHTML = ("Universe : Saison : "+season_result+" Episode : "+episode_result+" Titre : "+title)
}

function atlantis_random(){
  reset()
  var id = 2290;
  function season_random(){
    var settings = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(settings.url)
      season_alea = (Math.floor(Math.random() * response.seasons.length)); 
      console.log("Saison : "+season_alea);
      console.log(response.seasons);
    });
    return season_alea;
  }

  function episode_random(season_alea){
    var settings_2 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    $.ajax(settings_2).done(function (response) {
      console.log(settings_2.url)
      episode_alea = (Math.floor(Math.random() * response.episodes.length)+1); 
      console.log("Episode : "+episode_alea);
      console.log(response.episodes);
    });
    return episode_alea;
  }

  function result(season_alea,episode_alea){
    var settings_3 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"/episode/"+episode_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }

    $.ajax(settings_3).done(function (response) {
      console.log(settings_3.url)
      console.log(response.name);
      resultat = response.name
    });
    return resultat;
  }

  var season_alea;
  var season_result = season_random();
  console.log("var season : "+season_result);
  while (season_result == 0){
    season_result = season_random();
  }
  console.log("var season : "+season_result);
  var episode_result = episode_random(season_result);
  console.log("var episode : "+episode_result);
  var title = result(season_result,episode_result)
  Atlantis = document.querySelector(".Atlantis")
  Atlantis.innerHTML = ("Atlantis : Saison : "+season_result+" Episode : "+episode_result+" Titre : "+title)
}

function sg_1_random(){
  reset()
  var id = 4629;
  function season_random(){
    var settings = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    
    $.ajax(settings).done(function (response) {
      console.log(settings.url)
      season_alea = (Math.floor(Math.random() * response.seasons.length)); 
      console.log("Saison : "+season_alea);
      console.log(response.seasons);
    });
    return season_alea;
  }

  function episode_random(season_alea){
    var settings_2 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }
    $.ajax(settings_2).done(function (response) {
      console.log(settings_2.url)
      episode_alea = (Math.floor(Math.random() * response.episodes.length)+1); 
      console.log("Episode : "+episode_alea);
      console.log(response.episodes);
    });
    return episode_alea;
  }

  function result(season_alea,episode_alea){
    var settings_3 = {
      async: false,
      "url": "https://api.themoviedb.org/3/tv/"+id+"/season/"+season_alea+"/episode/"+episode_alea+"?api_key=3a1dd21b1318e5d4bd73b5b9b3bd7e74",
      "method": "GET"
    }

    $.ajax(settings_3).done(function (response) {
      console.log(settings_3.url)
      console.log(response.name);
      resultat = response.name
    });
    return resultat;
  }

  var season_alea;
  var season_result = season_random();
  console.log("var season : "+season_result);
  while (season_result == 0){
    season_result = season_random();
  }
  console.log("var season : "+season_result);
  var episode_result = episode_random(season_result);
  console.log("var episode : "+episode_result);
  var title = result(season_result,episode_result)
  SG = document.querySelector(".SG-1")
  SG.innerHTML = ("SG-1 : Saison : "+season_result+" Episode : "+episode_result+" Titre : "+title)
}

function generate(){
  serie = (Math.floor(Math.random() * 4))+1;
  psg = document.querySelector(".SG-1")
  patlantis = document.querySelector(".Atlantis")
  puniverse = document.querySelector(".Universe")
  pdoctor = document.querySelector(".Doctor_Who")
  pserie = document.querySelector(".Serie")
  console.log("Serie : "+serie);
  if (serie == 1){
    doctor_random()
    psg.innerHTML = ""
    patlantis.innerHTML = ""
    puniverse.innerHTML = ""
    pserie.innerHTML = ("Serie : Doctor Who")
  }
  else if (serie == 2){
    universe_random()
    psg.innerHTML = ""
    patlantis.innerHTML = ""
    pdoctor.innerHTML = ""
    pserie.innerHTML = ("Serie : Stagate Universe")
  }
  else if (serie == 3){
    atlantis_random()
    psg.innerHTML = ""
    puniverse.innerHTML = ""
    pdoctor.innerHTML = ""
    pserie.innerHTML = ("Serie : Stagate Atlantis")
  }
  else if (serie == 4){
    sg_1_random()
    patlantis.innerHTML = ""
    puniverse.innerHTML = ""
    pdoctor.innerHTML = ""
    pserie.innerHTML = ("Serie : Stagate SG-1")
  }
  else if (serie == 5){
    window.alert("WTF 5 !!!!")
  }
}

function reset(){
  psg = document.querySelector(".SG-1")
  patlantis = document.querySelector(".Atlantis")
  puniverse = document.querySelector(".Universe")
  pdoctor = document.querySelector(".Doctor_Who")
  pserie = document.querySelector(".Serie")

  pserie.innerHTML = ""
  psg.innerHTML = ""
  patlantis.innerHTML = ""
  puniverse.innerHTML = ""
  pdoctor.innerHTML = ""
}