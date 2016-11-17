$(document).ready(function(){

    var megustas = [];
    var nomegusta = [];
    var i = 0;
    var datos = [];
    var x = 0;

    $.get("http://localhost:3030/js/api.json", function(data, status){

        datos = [
            data[i].show_title,
            data[i].poster,
            data[i].summary
        ]

        $("h4").text(datos[0]);
        $(".card-img-top").attr("src", datos[1]);
        $(".card-text").html(datos[2]);

        $("#like").click(function(){
            for (i in data){
                i = z + 1;

        $("h4").text(datos[0]);
        $(".card-img-top").attr("src", datos[1]);
        $(".card-text").html(datos[2]);

            }
        });

        $("#dislike").click(function(){
            
        });

        $("#reset").click(function(){
            megustas = [];
            nomegusta = [];
            alert("Vueztroz arraiz han zido borradoz");
        });
    });    
});