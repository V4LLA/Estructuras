class Persona{
    constructor(celular,nombre,edad){
            this.celular=celular;
            this.nombre=nombre;
            this.edad=edad;
    }
}
var grupo =[ {Nombre:"Eduardo", Celular:111, Edad:17},
{Nombre:"Sergio", Celular:222, Edad:19},
{Nombre:"Javier", Celular:333, Edad:33},
{Nombre:"Saul", Celular:444, Edad:42},
{Nombre:"Jairo", Celular:555, Edad:21}]

function lista(){
    document.getElementById("lista").value=""
    let res=""
    let lista =grupo.map(function(grupo){
        res= res+ "Nombre: "+grupo.Nombre+"<br>"+ "Celular: "+grupo.Celular+"<br>"+"Edad: "+grupo.Edad +"<br> <br>"
    })
    lista=res
    document.getElementById("lista").innerHTML=res
}