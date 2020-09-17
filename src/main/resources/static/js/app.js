var app = (function (){
    var name = "";
    var fecha = "";
    var funciones = [];
    var cinema = [];

    var callback = function (param){

        if(param==undefined){
            alert("Cinema no existe o datos invalidos");
            return;
        }
        cinema = param;

        name=cinema.name;
        fecha=cinema.fecha;

        //console.log(cinema);
        if(cinema.lenght){

        }
        //searchByName();
        searchByNameAndDate();

        checkTable();
        funciones.map(function(data){
            var str = "<tr>"+
              "<td name='info'>"+data.movie+"</td>"+
              "<td>"+data.genero+"</td>"+
              "<td>"+data.fecha+"</td>"+
            "</tr>";
            $('#mainTable').append(str)
        })
        //console.log(funciones);
    };

    var searchByName = function(){
        funciones = cinema.functions.map(function(data){
            return {fecha: data.date,
                    movie: data.movie.name,
                    genero: data.movie.genre};
        })
    }

    var searchByNameAndDate = function(){
        funciones = cinema.map(function(data){
            return {fecha: data.date,
                    movie: data.movie.name,
                    genero: data.movie.genre};
        })
    }

    var checkTable = function(){
        $('#mainTable').find('td[name="info"]').each(function(){
            $(this).parents("tr").remove();
        });
    }

    return {
        setNameCinema : function (newName){
            name=newName;
        },
        setDateCinema : function (newFecha){
            fecha=newFecha;
        },
        setFuntionsByNameAndDate : function(){
            apimock.getFunctionsByCinemaAndDate(name,fecha,callback);
        },
        setFuntionsByName : function(name){
            apimock.getFunctionsByCinema(name,callback);
        }
    };

})();