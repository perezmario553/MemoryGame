let firstloop=0; 
let acertada;
let aleatory1;
let aleatory2;
let firstcard=0;
let fruit,fruit2; 
let save,check=0;
let counter = 0; 

document.getElementById('Congratulations').style.display='none';

Mix(); 

function Turn(id){ 
    fruit = id;
    if (firstcard == 0){
        save = id;
        firstcard =1;
        check=0;
        aleatory1 = fruitPosition(fruit);
        } 
        else if (firstcard==1){
            fruit2 = id;
            firstcard=0;
            check=1;
            aleatory2 = fruitPosition(fruit);
        }  
    let aleatory = fruitPosition(fruit); 
    let image = document.getElementById(id); 
    image.src= 'photo'+aleatory+'.JPG';
    
    if (check ==1){
    if (aleatory1 !== aleatory2){
    setTimeout(() => {                       //Después de dos segundos le damos la vuelta a la ficha de nuevo
        console.log('Fallada!!!');
        image.src= 'photo13.JPG';
        image = document.getElementById(save);
        image.src= 'photo13.JPG';
    }, 500);
} else {
    success();
}
}
}

function Mix(){ 
    fruits = [];

    fruits = [0,1,2,3,4,5,0,1,2,3,4,5]; 

    mixfruit = fruits.sort(function() {return Math.random()-0.5}); 
}

function success(){
    counter++; 
   let cont = document.getElementById("number"); 
   cont.innerHTML = counter; 

   if (counter == 6){ 
       document.getElementById('Congratulations').style.display='block';
   }
}

function fruitPosition(fruit){
    let pos; 
 
    if (fruit == 'photo1'){ 
        pos = mixfruit[0]
    } else if (fruit == 'photo2'){
        pos = mixfruit[1]; 
    } else if (fruit == 'photo3'){
        pos = mixfruit[2]; 
    } else if (fruit == 'photo4'){
        pos = mixfruit[3]; 
    } else if (fruit == 'photo5'){
        pos = mixfruit[4]; 
    }else if (fruit == 'photo6'){
        pos = mixfruit[5]; 
    }else if (fruit == 'photo7'){
        pos = mixfruit[6]; 
    } else if (fruit == 'photo8'){
        pos = mixfruit[7]; 
    }else if (fruit == 'photo9'){
        pos = mixfruit[8]; 
    }else if (fruit == 'photo10'){
        pos = mixfruit[9]; 
    }else if (fruit == 'photo11'){
        pos = mixfruit[10]; 
    }else if (fruit == 'photo12'){
        pos = mixfruit[11]; 
    } 
    return pos;

}


   



