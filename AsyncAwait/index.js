const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Do Something Async"), 3000)
            : reject(new Error("Test Error"))
    })
}


const doSomething = async () => {
    const something  = await doSomethingAsync();
    console.log(something);
}

console.log("Before");
doSomething();
console.log("After");


const anotherFunction =  async  () => {
    try {
        const something  = await doSomethingAsync();
        console.log(something);
    } catch  (error)  {
        console.error(error)
    }
}


console.log("Before");
anotherFunction();
console.log("After");
<<<<<<< HEAD
=======


//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////
//                  SOY LA RAMA CON NOMBRE RARO!!!.. q loco!!!              ////

//                  SOY LA ramaLoca!!!!         //
//                  SOY LA ramaLoca!!!!         //
//                  SOY LA ramaLoca!!!!         //
//                  SOY LA ramaLoca!!!!         //
//                  SOY LA ramaLoca!!!!         //
//estoy probando commiits!!
//todos estamos locos!!!
// probando ando xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd
//creacion de rama super loca xd




// no se que estoy haciendo!!.. no tengo idea!!!


//todo bien!!
>>>>>>> new-branch-pruebas
