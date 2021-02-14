let age:number = 25;
let club:string = 'Real Madred'
const isFamous:boolean = false;
let famous:boolean ;


function add (num1:any, num2:number | string){
    return num1 + num2;
}

add(4, 5);
add('Abbas', 'Kabbas');
add(4, 'Jabbar');







function fullName (firstName:string, lastName:string): string {
    return  firstName + ' ' + lastName;
}

const use:string = fullName('Martin', 'Adom');


function doubleItAndConsol(num:number): void{
    const result = num * 2;
    console.log(result);

}

doubleItAndConsol(10);




const multiply = (x:number, y:number):number => x * y;
console.log(multiply(25, 6))




const number:number[] = [1, 2, 3, 4, 5, 6, 7, 8];
number.push(9);


const friends:string[]= ['Hamba', 'Jamba', 'Khamba'];
let megaName:string= '';
for (let i = 0; i < friends.length; i++) {
    const firend:string= friends[i];
    if(firend.length > megaName.length){
        megaName = firend;
    }
}
console.log('longest name', megaName);


// objact

    
let friend: {
    name: string,
    age:number

}

 friend = {
    name: 'sami',
    age: 22,
}



interface Player {
    club: string,
    name: string,
    salary:number,
    wife?:string,
    isPlaying:boolean
}

const massy:Player = {
    club: 'barsa',
    name: 'massy',
    salary: 34567,
    wife:  'some one',
    isPlaying: true
}

const ronaldo:Player = {
    club: 'barsa',
    name: 'ronaldo',
    salary: 34567,
    isPlaying: true
}

function getBonus (Player: {salary: number}){
    return Player.salary *0.1;
}



class person {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
}

const sam = new person('Samuel');
console.log('name', sam.name);
const samName:string= sam.getName()
