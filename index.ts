

//Defining Types(Explicit Types):----------------------------------

// let userName:string = "SHakil"
// let subscribers:number = 3000_0
// let issubscribed:boolean = true
// let skills:string[] = ["js","express"]
// let conut:number[] = [1,2,3,4]
// let emptyArrau:[] = []
// let userDetail :{name:string,age:number} = {
//     name:"Shakil",
//     age:22
// }


// Interface:------------------------------------------------

// interface Details {
//     name:string;
//     age:number;
//     getName:()=> void;
// }

// let userDetail : Details = {
//         name:"Shakil",
//         age:22,
//         getName() {
//             console.log(this.name);
            
//         },
//     }

//  let adminDetail : Details = {
//         name:"Shakil",
//         age:22,
//         getName() {
//             console.log(this.age);
            
//         },
//     }



// Type:----------------------------------------------

// type Details = {
//     name:string;
//     age:number;
//     getName:()=> void;
// }


//  let adminDetail : Details = {
//         name:"Shakil",
//         age:22,
//         getName() {
//             console.log(this.age);
            
//         },
//     }

//union/optional--------------------------------------

// type Details = {
//     name:string;
//     age:number | string;
//     getName?:()=> void;
// }

//  let adminDetail : Details = {
//         name:"Shakil",
//         age:"hello",
//         getName() {
//             console.log(this.age);
            
//         },
//     }

//     let userDetail : Details = {
//         name:"Shakil",
//         age:"hello",
//     }

// let skills:(string | number)[] = ["js","express",3,4]

