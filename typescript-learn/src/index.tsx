class Greeter { 
    greeting: string;
    constructor(messgae: string) {
        this.greeting = messgae;
    }
    greet() { 
        return 'Hello, ' + this.greeting;
    }
}

let greeter = new Greeter('old');

alert(greeter.greet());

// let button = document.createElement('button');
// button.textContent = 'say hello';
// button.onclick = function () {
//     alert(greeter.greet());
// };
// document.body.appendChild(button);