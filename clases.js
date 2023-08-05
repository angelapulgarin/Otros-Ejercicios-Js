
class Persona {
    nombre = "";
    apellido = "";
    edad = 0;

    comida = 0;

    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }


    set setComidaFavorita(comida){
        this.comida = comida; 
    }


    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }




    saludar () {
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }


}


class Estudiantes extends Persona {
    clases = "Front-end";

    constructor (nombre, apellido, edad, clases) {
        super (nombre, apellido, edad);
        this.clases = clases;
    
    }

    saludar () {
        super.saludar();
        console.log(`Hello my name is ${this.nombre} and my age is ${this.edad}`)
    }




}


const michel = new Estudiantes ("Michel", "Plazas", 19, "Programaciòn");

console.log(michel);
michel.saludar();



//const angela = new Persona("Angela", "Pulgarin", "28");
//console.log (angela);
//angela.setComidaFavorita = "mariscos"
//console.log(angela);
//console.log (angela.getComidaFavorita);

