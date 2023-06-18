function main(){

    // for (let i = 0; i< 10; i++)
    // variable , bedingung , statement

    let names = ["Peter" , "Jannik" , "Maria"]

    //for(let i = 0; i < names.length; i++){
        //console.log(names[i])
    //}

    let revenue = [100 , 899 , 839 , 636 , 388 , 903]
    let totalRevenue = 0;
    	
        for(let i = 0; i < revenue.length; i++) {
            totalRevenue += revenue[i];
            //console.log(totalRevenue)
        }

        //console.log("Total: " + totalRevenue)


        //for of schleife 

        let cars = [
            {
                "brand":  "Mercedes",
                "age": 10
            },
            {
                "brand":  "VW",
                "age": 20
            },
            {
                "brand":  "Audi",
                "age": 4
            }
        ]

        for(let car of cars){

            if(car.brand == "Mercedes"){
                //console.log(car)
            }else{
                //console.log("Auto ist kein Mercedes")
            }
        }

        //while schleife

        let counter = 0;

        while(counter < 100 ){
            //console.log(counter)
            //counter++;
        }

        //do while schleife 

        do {
            console.log(counter)
        } while (counter < 100);
}