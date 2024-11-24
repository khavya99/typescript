function addTwo(numb:number): number{
    return numb+2
}
function signUpUser(name:string, user:string, password:number){
}

// Arrow function
let loginUser = (name:string='Chandu', email:string, isPaid:boolean) => {}
const getHello = (s: string ):string => {
    return ""
}

loginUser('Bhavya','bhavya493',true)
signUpUser('Bhavya', 'bhavya493', 12345)
addTwo(9);

// map
const heroes = ['Naruto', 'Goku', 'Doraemon']
heroes.map((heeero):string => {
    return `hero is ${heeero}`
})

function consoleError(errMsg:string): void{
    console.log(errMsg);
}

function handleError(errMsg:string): never{
    throw new Error(errMsg);
}





export {}







