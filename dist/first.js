"use strict";
var age = 25;
var club = 'Real Madred';
var isFamous = false;
var famous;
function add(num1, num2) {
    return num1 + num2;
}
add(4, 5);
add('Abbas', 'Kabbas');
add(4, 'Jabbar');
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var use = fullName('Martin', 'Adom');
function doubleItAndConsol(num) {
    var result = num * 2;
    console.log(result);
}
doubleItAndConsol(10);
var multiply = function (x, y) { return x * y; };
console.log(multiply(25, 6));
var number = [1, 2, 3, 4, 5, 6, 7, 8];
number.push(9);
var friends = ['Hamba', 'Jamba', 'Khamba'];
var megaName = '';
for (var i = 0; i < friends.length; i++) {
    var firend = friends[i];
    if (firend.length > megaName.length) {
        megaName = firend;
    }
}
console.log('longest name', megaName);
// objact
var friend;
friend = {
    name: 'sami',
    age: 22,
};
var massy = {
    club: 'barsa',
    name: 'massy',
    salary: 34567,
    wife: 'some one',
    isPlaying: true
};
var ronaldo = {
    club: 'barsa',
    name: 'ronaldo',
    salary: 34567,
    isPlaying: true
};
function getBonus(Player) {
    return Player.salary * 0.1;
}
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    return person;
}());
var sam = new person('Samuel');
console.log('name', sam.name);
var samName = sam.getName();
