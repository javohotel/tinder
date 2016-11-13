
$(document).ready(function(){
    $.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino", function(data, status){
    	
    	var random = 0;

    	var nombre = data[random].show_title;
    	var imagen = data[random].poster;
    	var descripcion = data[random].summary;
        var id = data[random].show_id;

        $("h4").text(nombre);
        $(".card-img-top").attr("src", imagen);
        $(".card-text").html(descripcion);

        $("#like").click(function(){
            event.preventDefault();
            
            $.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino", function(data, status){

                random = random + 1;

                if(random >= 7){
                    alert("No hay mas peliculas para mostrar")
                };

                var nombre = data[random].show_title;
                var imagen = data[random].poster;
                var descripcion = data[random].summary;
                var idLike = data[random].show_id;
                
                $("h4").text(nombre);
                $(".card-img-top").attr("src", imagen);
                $(".card-text").html(descripcion);

            });
        });

        $("#dislike").click(function(){
            event.preventDefault();
            
            $.get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino", function(data, status){

                random = random + 1;

                if(random >= 7){
                    alert("No hay mas peliculas para mostrar")
                };

                var nombre = data[random].show_title;
                var imagen = data[random].poster;
                var descripcion = data[random].summary;
                var idDislike = data[random].show_id;
                
                $("h4").text(nombre);
                $(".card-img-top").attr("src", imagen);
                $(".card-text").html(descripcion);

                data.splice(random);


            });
        });


    	
    
    });

});