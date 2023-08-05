
class mascota {
    nombre = " ";
    tipo = " ";
    energia = 100;


    constructor (nombre, tipo, energia) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = energia;

    }

//este método incrementa el nivel de energía de la mascota en 20. Si el nivel de energía supera 100, debe establecerse en 100.


    alimentar () {
        this.energia +=20

        if (this.energia <100) {
            this.energia = 100;

        }

    }

//este método decrementa el nivel de energía de la mascota en 10. Si el nivel de energía es inferior a 10, se debe mostrar un mensaje indicando que la mascota no tiene suficiente energía para jugar.

    jugar () {
        this.energia -=10;

        if (this.energia > 10) {
            console.log (`${this.nombre} no tiene suficiente energia para jugar `)
        }
    }


//este método muestra un mensaje con el nombre de la mascota y su nivel de energía actual.

    mostrarEnergia() {
        console.log(`El nivel de energia de ${this.nombre} es de ${this.energia} `)
    }



    }

//Crea dos instancias de la clase Mascota, una para un perro y otra para un gato. Asígnales nombres y tipos de tu elección.

const katy = new mascota ("Katy", "perro", "30");
console.log(katy);
katy.alimentar();
katy.jugar();
katy.mostrarEnergia();



const molly = new mascota ("Molly", "gato", "200");
console.log(molly);
molly.alimentar();
molly.jugar();
molly.mostrarEnergia();



//Realiza una serie de acciones con las mascotas, como alimentarlas y jugar con ellas.
//Después de realizar las acciones, utiliza el método 
 //para mostrar los niveles de energía actualizados de ambas mascotas.