// let x=10;
// let y=20;
// let sum=x+y;
// console.log(sum);

// let x=10;
// let y=20;
// let name="Saman";
// let isAdd = true;

// let customerList = [];
// let customer={};

// let salary =4500.00;

// console.log(typeof x);
// console.log(typeof name);
// console.log(typeof isAdd);
// console.log(typeof customerList);
// console.log(typeof customer);
// console.log(typeof salary);

// var name="Saman";
// String name;
// {
//     // var name="Saman";
//     let age=12;
//     // name="";

// }

// console.log(name);
// console.log(age);

// const nameList = [""];

// nameList = "";

// for (let i =0;i<10;i++){
//     console.log("Hello");
// }

// let numberList = [10,20,30,40,50,60,70,80,90,100];

// for (let number of numberList){
//     console.log(number);

// }

// numberList.forEach(number => {
//     console.log(number);
// })

// let isAdd=true;
// let isAdd=false;

// if(isAdd){
//     console.log('Customer Added!');
// }else{
//     console.log('Customer Not Added!');
// }

// let roomNumber =10;

// switch(roomNumber){
//     case 1 : console.log("This is room number 01");break;
//     case 2 : console.log("This is room number 02");break;
//     case 3 : console.log("This is room number 03");break;
//     case 5 : console.log("This is room number 05");break;
//     case 6 : console.log("This is room number 06");break;
//     case 10 : console.log("This is room number 10");break;

// }

// let isTrue =10 === "10";

// console.log(isTrue);

// getSum(10,20);

// function getSum(x,y){
//     console.log(x+y);


// }

// class Example{
// ]   public static void main(String args[]){


//     }
// }

// let sum = getSum(10,20);
// console.log(sum);


// function getSum(x,y){
//     let sum = x+y;
//     return sum;


// }

// let sum = getSum(10,20);
// console.log(sum);


// function getSum(x,y){

//     return x+y;


// }

// let customer={};

// console.log(customer);

// class Customer{
//     name;
//     age;
//     adddress;
//     salary;

//     Customer(name,age,address,salary){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//         this.salary=salary;

//     }

//     getName(){}
//     setName(){}
// }

// let customer=new Customer("Saman",12,"Panadura",75000.00);

let customer = {
    name: "Saman",
    age: 12,
    address: "panadura",
    salary: 7500.00
}

// let customerList = [
// {},{},{},{},{},{},{},{},{},{}

// ]

const customerList = [
    {
        name: "Saman",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "kamal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Sunil",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Ranil",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Nimal",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Somapala",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Siripala",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "gunapala",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "Sam",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }, {
        name: "manny",
        age: 12,
        address: "panadura",
        salary: 7500.00
    }
]

// document.write(customerList.toString())

// document.write(customerList[0].address)
// document.write(customerList[0].name)
// document.write(customerList[0].age)


// let h1=document.getElementById("h1");

// h1.textContent="Vimal"
// console.log(h1);

// h1.textContent=customerList[0].name;





// console.log(customerList);



// console.log(customer.address);
// console.log(customer.name);
// console.log(customer.age);
// console.log(customer.salary);

// let ol = document.getElementById("ol");

// let body="";



// customerList.forEach(customer=>{
//     // body +="<li>Sunimal</li>"
//     body +=`<li>${customer.name}</li>`
//     // body +=`<li>${customer.address}</li>`
//     // body +=`<li>${customer.age}</li>`
//     // body +=`<li>${customer.salary}</li>`

// })

// ol.innerHTML=body;

loadList();

function loadList() {
    let ol = document.getElementById("ol");

    let body = "";



    customerList.forEach(customer => {
        // body +="<li>Sunimal</li>"
        body += `<li>${customer.name}</li>`
        // body +=`<li>${customer.address}</li>`
        // body +=`<li>${customer.age}</li>`
        // body +=`<li>${customer.salary}</li>`

    })

    ol.innerHTML = body;

}

function addCustomer() {

    alert("ALERT ALERT");

    let TxtName = document.getElementById("TxtName");
    let customerName = TxtName.value;

    customerList.push({
        name: customerName
    });

    loadList();

    console.log(customerName);


    // console.log("Clicked!!!");
    // console.log(TxtName.value);

}

