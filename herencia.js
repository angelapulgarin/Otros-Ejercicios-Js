
class mascota {
    nombre = " ";
    tipo = " ";
    energia = 100;


    constructor (nombre, tipo, energia) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = energia;

    }


    alimentar () {
        this.energia +=20

        if (this.energia <100) {
            this.energia = 100;

        }

    }


    jugar () {
        this.energia -=10;

        if (this.energia > 10) {
            console.log (`${this.nombre} no tiene suficiente energia para jugar `)
        }
    }



    mostrarEnergia() {
        console.log(`El nivel de energia de ${this.nombre} es de ${this.energia} `)
    }


}

class perro extends mascota {

    constructor (nombre, tipo, energia) {
        super(nombre,tipo,energia);

    }

//muestra un mensaje indicando que el perro está ladrando

    ladra(){
        console.log(`El perro està ladrando`);
    } 

}


class gato extends mascota {

    constructor (nombre, tipo, energia) {
        super(nombre,tipo,energia);

    }

// muestra un mensaje indicando que el gato está ronroneando.

    ronronea(){
        console.log(`El gato està ronroneando`);
    } 

}

//Crea instancias de las clases Perro y Gato con nombres y tipos de tu elección.

const katy = new perro ("Katy", "perro", "30");
console.log(katy);
katy.alimentar();
katy.jugar();
katy.ladra();
katy.mostrarEnergia();



const molly = new gato ("Molly", "gato", "200");
console.log(molly);
molly.alimentar();
molly.jugar();
molly.ronronea();
molly.mostrarEnergia();




