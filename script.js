// let nume = "Vlad";


// function functioname(nume){
//    console.log("Hello " , nume);
// }

// functioname(nume);



// let human = {
//     fullname: 'Object Name',
//     age: 11,
//     email: 'email.com'
// };


// console.log(human.fullname);





// let cat = {
//     colour: 'orange',
//     age: 9,
//     name: 'Piersic'
// };


// console.log(cat);

// cat.age = 10;
// cat.colour = 'yellow',

// console.log(cat);



// class human{
//     let organs = {
//         heart: 'Blood pump',
//         brain: 'Info work',
//     }

//     function eat(){
//         console.log('I eat');
//     }

    
//     age: 445;
// }

// let info = 'info';

// let n = {
//     info: 'Lesson4',
//     display(parameter){
//         console.log(this.info, parameter);  
        

//     }

// };

// n.display('text');




let phone = {
    type: 'Iphone',
    colour: 'Black',
    procesor: 'A16 bionic',
    
    turnOn(){
        console.log(this.type, ' se porneste');
    },

    discharge(){
        console.log('Charge me');
    },

    call(){
        console.log('Eu pot suna');
    },

    photo(){
        return 'eu fac poze in idk mp';
    }
};



console.log(phone.type);
console.log(phone.photo());
phone.call();


class cat{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    ceaipitea(cat1, cat2){
        console.log(cat1, " a venit la ", cat2, " sa bea ceai");
    }
}




let Piersic = new cat("Piersic", 9);
let Barsik = new cat("Barsik", 3);
Barsik.ceaipitea(Barsik.name, Piersic.name);
Piersic.ceaipitea(Piersic.name, Barsik.name);