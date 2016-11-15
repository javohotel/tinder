var random = 0;
var megustas = [];
var nomegusta = [];

$(document).ready(function(){
    $.get("http://localhost:3030/js/api.json", function(data, status){

    	var nombre = data[random].show_title;
    	var imagen = data[random].poster;
    	var descripcion = data[random].summary;
        var id = data[random].show_id;

        $("h4").text(nombre);
        $(".card-img-top").attr("src", imagen);
        $(".card-text").html(descripcion);    
    });

    function pasarOk(){
            
        $.get("http://localhost:3030/js/api.json", function(data, status){

            megustas.push(data[random]);

            random = random + 1;
            if(random >= data.length){
                alert("No hay mas peliculas para mostrar")
            }

            nombre = data[random].show_title;
            imagen = data[random].poster;
            descripcion = data[random].summary;
            
            $("h4").text(nombre);
            $(".card-img-top").attr("src", imagen);
            $(".card-text").html(descripcion);

         });
    };

    function pasarNo(){
            
        $.get("http://localhost:3030/js/api.json", function(data, status){

            nomegusta.push(data[random]);

            random = random + 1;
            if(random >= data.length){
                alert("No hay mas peliculas para mostrar")
            }

            nombre = data[random].show_title;
            imagen = data[random].poster;
            descripcion = data[random].summary;
            
            $("h4").text(nombre);
            $(".card-img-top").attr("src", imagen);
            $(".card-text").html(descripcion);

         });
    };

    $("#like").click(function(){
        pasarOk();
    });

    $("#dislike").click(function(){
        pasarNo();
    });

    $("#reset").click(function(){
        megustas = [];
        nomegusta = [];
        alert("Vueztroz arraiz han zido borradoz")
    });
});