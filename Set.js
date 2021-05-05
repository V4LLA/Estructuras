class Persona{
  constructor(celular,nombre,edad){
          this.celular=celular;
          this.nombre=nombre;
          this.edad=edad;
  }
  info(){
      return "Celular:" +this.celular+ "<br>" + "Nombre:" +this.nombre+ "<br>" + "Edad:" +this.edad;
  }
}

var grupo = new Set()
grupo=[
  {Nombre:"Rodrigo", Celular:111, Edad:22},
  {Nombre:"Ramses", Celular:222, Edad:29},
  {Nombre:"Johan", Celular:333, Edad:31},
  {Nombre:"Genaro", Celular:444, Edad:12},
  {Nombre:"Ramon", Celular:555, Edad:55}
]

function lista(){
    document.getElementById("lista").value=""
    let res=""
    for(let i=0;i<5;i++){
    res= res+ "Nombre: "+grupo[i].Nombre+"<br>"+ "Celular: "+grupo[i].Celular+"<br>"+"Edad: "+grupo[i].Edad +"<br> <br>"
    }
    document.getElementById("lista").innerHTML=res
}