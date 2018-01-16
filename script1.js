/*var name = 'Tung';
console.log(name);
var lastName = 'Dinh';
console.log(lastName);
var age = 21;
console.log(age);
var name = 'Tung';
var age = 21;
var job, isMarried;
job = "student";
isMarried = false;
console.log(name+" is a "+age+" years old "+job+". Is he married? "+isMarried);
job = "Software Developer";
isMarried = false;
console.log(name+" is a "+age+" years old "+job+". Is he married? "+isMarried);
var info = prompt("What is his job");
console.log(job);
alert(name+" is a "+age+" years old "+job+".");
var isMarried = 'no';
if(isMarried==='yes') {
    console.log("Tung is married!")
} else {
    console.log("Tung will marry soon!");
}
isMarried=false;
if(isMarried) {
    console.log("Married!");
} else {
    console.log("Not Married!")
}
var job = 'software developer';
job = prompt('What do I do?');
switch (job) {
    case 'software developer':
        console.log('I will be making a great Android application.');
        break;
    case 'driver':
        console.log('I am delivering food for everyone.');
        break;
    case 'student':
        console.log('I am studying JavaScript to make my own website.');
        break;
    default:
        console.log('I am doing something else.');
}





var johnHeight = 179;
var mattHeight = 185;
var johnAge = 22;
var mattAge = 22;
var johnScore = johnHeight+5*johnAge;
var mattScore = mattHeight+5*mattAge;
var scottHeight = 186;
var scottAge = 22;
var scottScore = scottHeight+5*scottAge;
if (johnScore>mattScore&&johnScore>scottScore) {
    console.log('John wins with '+johnScore+' score.');
} else if (johnScore<mattScore&&mattScore>scottScore) {
    console.log('Matt wins with '+mattScore+' score.');
} else if (scottScore>johnScore&&scottScore>mattScore) {
    console.log('Scott wins with '+scottScore+' score.');
} else {
    console.log('There is a draw!');
}
function toCelcius(f) {
    var c = 5/9 * (f-32);
    console.log('The temperature is '+c+' Celcius degree.');
}
toCelcius(60);
var zac = ['Tung', 'Dinh', 21, 'software developer', true];
zac.push('soccer'); 
zac.unshift('Mr.');
zac.pop(); //remove last element of the array
zac.shift(); // remove first element of the array
console.log(zac);
if(zac.indexOf('software developer') === -1) {
    console.log('Tung Dinh is Not a software developer.');
} else {
    console.log('Tung Dinh is a potential software developer.');
}
var tung = {
    name: 'Tung',
    lastName: 'Dinh',
    age: 21,
    job:'software developer',
    isMarried: false,
};
console.log(tung);
console.log('Tung Dinh is a potential '+tung.job);
console.log('Tung is '+tung['age']+' years old.');

var zac = new Object();
zac.name = 'Zac';
zac.lastName = 'Smith';
zac.age = 25;
zac.job = 'web developer';
zac.isMarried = false;
console.log(zac);

var tung = {
    age: 22,
    calculateYOP: function() {
    return 2018-this.age;    
    }
};
console.log(tung.calculateYOP());
var yob = tung.calculateYOP();
tung.yob = yob;
console.log(tung);

var tung = {
    name: 'Tung Dinh',
    age: 22,
    job: 'software developer',
    family: ['Mark', 'Jon', 'Nick'],
    calculateYOP: function() {
    this.birthYear = 2018-this.age;    
    }
}
console.log(tung.family[2]);
tung.calculateYOP();
console.log(tung);
var family = ['John', 'Mark', 'Ashley', 'Jane', 'Nick'];
for(var i=family.length-1; i>=0; i--) {
    console.log(family[i]);
}
var i = family.length-1;
while(i>=0) {
    console.log(family[i]);
    i--;
}

//Coding Challenge 2




function printFullAge(year) {
    
var array = [];

for(var i = 0; i < year.length; i++) {
    
    array.push(2018 - year[i]);

}

for(var i=0; i<array.length; i++) {
    if(array[i]<18) {
        array[i] = false;
        console.log('Person ' + (i+1) + ' was born in '+year[i]+' is NOT a full age!')
        
    } else {
        array[i] = true;
        console.log('Person ' + (i+1) + ' was born in '+year[i]+' is a full age!')
    }
}
   return array;
}
var year = [1998, 1996, 2006, 1930];
var full_1 = printFullAge(year);
var full_2 = printFullAge([1964, 2005, 1990]);

var a = 'Tung! ';
first();
function first() {
    var b = 'Hi, ';
    second();
    function second() {
        var c = 'How are you today? '
        third();
        function third() {
            var d = 'I\'m good. Thanks!';
            console.log(b+a+c+d);
        }
    }
}

var tung = {
    name: 'Tung',
    birthYear: 1996,
    calculateAge: function() {
        console.log(this);
        console.log(2018-this.birthYear);
    }
};
tung.calculateAge();

var matt = {
    name:'Matt',
    birthYear: 1995
};
matt.calculateAge= tung.calculateAge;
matt.calculateAge();


var temperature = {
    city: 'Seattle',
    todayTemp: 45,
    yesterdayTemp: 52,
};
var Temp = function(city, todayTemp, yesterdayTemp) {
    this.city = city;
    this.todayTemp = todayTemp;
    this.yesterdayTemp = yesterdayTemp;
}
Temp.prototype.calculateAvgTemp = function() {
    var avg = (this.todayTemp+this.yesterdayTemp)/2;
    console.log('Temperature in '+this.city+' is average '+avg+' F degree a day!');
};
Temp.prototype.toCelcius = function() {
     var c = 5/9*((this.todayTemp+this.yesterdayTemp)/2-32);
        console.log('Temperature in '+this.city+ ' is average '+c+' C degree a day!');
}
var laTemp = new Temp('Los Angeles',56,57);
var chiTemp = new Temp('Chicago', 42, 46);
var hawTemp = new Temp('Hawaii', 67, 74);
laTemp.calculateAvgTemp();
laTemp.toCelcius();
chiTemp.calculateAvgTemp();
chiTemp.toCelcius();
hawTemp.calculateAvgTemp();
hawTemp.toCelcius();*/


var personProto = {
    calculateAge: function() {
        console.log(2016-this.yearOfBirth);
}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

var jane = Object.create(personProto,{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1996},
    job: { value: 'Model'}
});
























































