//ex3.1

const payment = (totalAmount) => {
    const transation = 3;
    const interestFee = 0.001;
    const interest = totalAmount*interestFee;
    const payment = totalAmount + interest + transation;
    return payment;
}

const totalAmount = 2000;
console.log(payment(totalAmount));

//ex.3.2 part1
const greeting = (friends) => {
    const card = `Welcome ${friends}!`;
    return card;
}

const friends = 'John,Anna,Robert';
console.log(greeting(friends));


//ex.3.2 part1
const greeting = (friend1, friend2, friend3) => {
    return `Welcome ${friend1}, ${friend2}, ${friend3}!`;
}

const welcome = greeting("John","Anna","Robert");
console.log(welcome);

//ex.3.2 part2
const Age = (birthYear) => {
    const nowYear = 2024;
    const Age = nowYear - birthYear;
    return Age;
}

const birthYear = 1998;
console.log(Age(birthYear));

//ex.3.2 part3 Ed would like to create a function that prints out,
//`Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

    const ageSystem = (name1,birthYear1,name2,birthYear2,name3,birthYear3) => {
        const age1 = Age(birthYear1);
        const age2 = Age(birthYear2);
        const age3 = Age(birthYear3);

        const sayHi1 = `Welcome ${name1}, ypu are ${age1}`;
        const sayHi2 = `Welcome ${name2}, ypu are ${age2}`;
        const sayHi3 = `Welcome ${name3}, ypu are ${age3}`;

        console.log(sayHi1);
        console.log(sayHi2);
        console.log(sayHi3);
    }

    ageSystem('John',1985,'Anna',2005,'Robert',1880)


