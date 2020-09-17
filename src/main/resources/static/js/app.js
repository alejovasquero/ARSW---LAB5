var app = (function (){
    var name = "";
    var fecha = "";
    var funciones = [];
    var cinema = [];

    var callback = function (param){
        cinema = param;

        name=cinema.name;

        cinema.functions.map(function(data){
                
                return null;
            })
        
        console.log(cinema.functions);
    };

    return {
        setNameCinema : function (newName){
            name=newName;
        },
        setDateCinema : function (newFecha){
            fecha=newFecha;
        },
        setFuntionsByNameAndDate : function(name,fecha){
            apimock.getFunctionsByCinemaAndDate(name,fecha,callback);
        },
        setFuntionsByName : function(name){
            apimock.getFunctionsByCinema(name,callback);
        }
    };

})();