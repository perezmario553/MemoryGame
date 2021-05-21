// let firstloop = 0; // No la usas!
// let acertada; // No la usas!

// Los nombres de las variables deben ser específicos, para que cualquier persona que participe en el proyecto
// pueda saber rápido que es, en general están bien todos
// Los nombres en Javascript se suelen poner en camelCase, y los nombres de los archivos compilados, osea como los que has hecho tu en minúsculas todo
// En el caso de React o otro frameworks y entornos, a veces se usa el PascalCase EnEseCasoEsComoSiVuelvoALos15 pero escribiendo bien

let aleatory1;
let aleatory2;
let firstCard = 0;
let fruit,fruit2; 
let save,check = 0;
let counter = 0;

Mix(); 

// Te he eliminado el display none inicial, porque lo puedes dejar seteado inicialmente en el css, y no haces trabajar a la lógica

function Turn(id) {
    fruit = id;
    // Este es un caso de Switch, más abajo te explico lo de los switch / condicionales / objetos, además lo he bajado
    switch (firstCard) {
        case 0:
            save = id;
            firstCard = 1;
            check = 0;
            aleatory1 = fruitPosition(fruit);
            break;
        case 1:
            fruit2 = id;
            firstCard = 0;
            check = 1;
            aleatory2 = fruitPosition(fruit);
            break;
        default:
            // none
    }

    let aleatory = fruitPosition(fruit);
    let image = document.getElementById(id);
    image.src= 'photo'+aleatory+'.JPG';

    // Bien resuelto
    // PEROOOO TE LO HE ROTO! JA! Si hago click rapido en varias se dan la vuelta más de dos y una se queda loca
    // Lo solucionaremos obligando al usuario a que si hay dos clicadas, hasta q no se de la vuelta, no puede volver a hacer click

    if (check === 1){
        if (aleatory1 !== aleatory2) {
            document.querySelector('body').style.pointerEvents = 'none'
            setTimeout(() => {                       //Después de dos segundos le damos la vuelta a la ficha de nuevo
                console.log('Fallada!!!');
                image.src= 'photo13.JPG';
                image = document.getElementById(save);
                image.src= 'photo13.JPG';
                document.querySelector('body').style.pointerEvents = 'inherit'
            }, 500);
        } else {
            success();
        }
    }
}

function Mix(){ 
    let fruits = [0,1,2,3,4,5,0,1,2,3,4,5];  // aquí tienes inicializado a vacio y después lo llenas, puedes hacerlo directamente con el valor, y no lo has seteado, chrome se lo come pero en otros navegadores...

    mixfruit = fruits.sort(function() {
        return Math.random()-0.5}
    );
}

function success(){
    counter++;

    // Usamos querySelector que es de la última versión de HTML5, acabarán deprecando el getElementById entre otros, porque a nivel de motor
    // Hacen más recorrido y tardan más en encontrarlo

   let cont = document.querySelector("#number");
   cont.innerHTML = counter; 

   if (counter == 6){ 
       document.querySelector('.congrats').style.display = 'block';
   }
}

function fruitPosition(fruit) {
    // Optimización! Para asignar un valor según un parámetro se puede usar los condicionales, como has hecho tu
    // Se puede usar un switch
    // O se puede usar un objeto
    // El objeto debería de ser la primera opción siempre, debido al bajo coste en renderización, y la optimzación que supone
    // para cualquier navegador
    // Siempre hay que ponerse en la situación de que nuestros usuarios tal vez se conectan desde un pueblo con 3g donde no llega
    // la fibra, eso hace que tu programa/web/herramienta tarde más en cargar, mientras más optimizado esté tu código
    // más rápido será, menos pesará y más lo agradecerá tu proyecto (que estará ordenado, tendrá menos lineas de código, pesará menos, irá más rápido)
    // Cuando el objeto no sea una opción viable entonces pasamos al switch y como última opción para una reasignación como esta, usamos el if
    // que funciona igual, peeeeeeero es la menos optima
    const photo = {
        photo1: mixfruit[0],
        photo2: mixfruit[1],
        photo3: mixfruit[2],
        photo4: mixfruit[3],
        photo5: mixfruit[4],
        photo6: mixfruit[5],
        photo7: mixfruit[6],
        photo8: mixfruit[7],
        photo9: mixfruit[8],
        photo10: mixfruit[9],
        photo11: mixfruit[10],
        photo12: mixfruit[11],
    }

    return photo[fruit];

}


   



