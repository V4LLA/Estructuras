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

class Personas{
    constructor(){
        this.datos=[];
    }
    agregar(nuevo){
        this.datos.push(nuevo);
    }
    listar(){
        let txtper="";
        for(let i=0; i<this.datos.length; i++){
            txtper=txtper+this.datos[i].info()+"<br>"+"<br>";
        }
        return txtper;
    }

    buscar(celular){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].celular===celular) {
                return this.datos[i];
            }
        }
        return null;
    }
}

let persona=new Personas();

let nuevo = new Persona('111','Alan',10);
persona.agregar(nuevo);
nuevo = new Persona('222','Beto',20);
persona.agregar(nuevo);
nuevo = new Persona('333','Carlos',30);
persona.agregar(nuevo);
nuevo = new Persona('444','David',40);
persona.agregar(nuevo);
nuevo = new Persona('555','Efrain',50);
persona.agregar(nuevo);

document.write(persona.listar());

let perbus = persona.buscar("444");
document.write("Se encontro:" + perbus.info() +"<br>");