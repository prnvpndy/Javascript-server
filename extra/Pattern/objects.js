//Creating a program with Objects and how object do their work.

/*1) object.assign : Copies the values of all enumerable own properties from one or more source objects to a target object.
                        i)  Object.assign() is used for cloning an object.
                        ii) Object.assign() is used to merge object with same properties. */


let data1 = {
      fullName:'Pranav Pandey',
      Age: 24,
      Interest: 'Bike Riding, Hiking,',
      
}

let data2 ={
      Orgnisation: 'Successive Technologies',
      workExp: '1 month',
      Location: 'Noida',
}

let data3 = {
      prevCompany: 'Facebook Inc',
      prevworkExp: '18 Month',
      prevLocation: 'Hyderabad',
} 

const displayData = Object.assign({}, data1, data2, data3);

console.log(data1);

console.log(displayData);


/*Object.create(): Object.create() is used for implementing inheritance.
                  Parameters Used:
                        prototype : It is the prototype object from which a new object has to be created.

                        propertiesObject : It is optional parameter. It specifies the enumerable properties to be added to the newly created object.
                        
                  Return Value: Object.create() returns a new object with the specified prototype object and properties.*/






let laptop = {
      Processori7: false,
      printConfiguration: function(){
            console.log(`This is ${this.brand}. Is this laptop processor is i7? ${this.Processori7}`);
      }
}

const me = Object.create(laptop)

me.brand = 'HP Laptop', // "brand" is a property set on "me", but not on asset.
me.Processori7 = true; // inherited properties can be overwritten

me.printConfiguration();

/* The Object.defineProperty() method in JavaScript is a Standard built-in objects which defines a new property directly on an object and returns the object.
            Parameter:  Obj: This is the parameter which hold the object on which user is going to define the property.
                        Prop: This parameter hold the name of property which is going to be defined or modified.
                        Descriptor: This is parameter which hold the descriptor for the property being defined or modified.
            Return Value: This retunr object which is passed as argument to the function.    
            
 */

let nav1 = {}; 
Object.defineProperty(nav1, 'prop1', { 
  value: 65, 
  writable: false
}); 
nav1.prop1 = 7; 
console.log(nav1.prop1);
/* Object.entries(): This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
*/

let person = { fname: 'Pranav', age: 22 };
console.log(Object.entries(person)); // [ ['fname', 'age'], ['age', 22] ]


/* Object.freeze(): It freezes the object. A frozen object can no longer be change */

let Game = {
      prop: "Fast n Furious"
}
Object.freeze(Game);
Object.prop = 'PUBG';

console.log(Game.prop);

/* Object.fromEntries(): It is a method which transform list of key value-pair into object */

let object1 = { a: 1, b: 2, c: 3 };

let object2 = Object.fromEntries(
  Object.entries(object1).map(([ key, val ]) => [ key, val * 2 ])
);
console.log(object2);

/* Object.getOwnPropertyDescriptor(): This method returns an object describing the configuration of a specific 
property on a given object (that is, one directly present on an object and not in the object's prototype chain). 
The object returned is mutable but mutating it has no effect on the original property's configuration.  */
let Domnic = {
      age: 42
    };
    
    let descriptor1 = Object.getOwnPropertyDescriptor(Domnic, 'age');
    
    console.log(descriptor1.configurable);
    // expected output: true
    
    console.log(descriptor1.value);
    // expected output: 4

/* The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object. */
/*Parameters: This method accepts single parameter as mentioned above and described below:

obj: This parameter holds the object for which all own property descriptors are to be get.*/

let Lenevo = {
      prop1: "Affordable Laptop"
}

let Dell = {
      prop2: "Good performance laptop",
      prop3: "For gaming"
}
let descrptr = Object.getOwnPropertyDescriptors(Lenevo);   
let descrptr1 = Object.getOwnPropertyDescriptors(Dell);   
console.log(descrptr.prop1.enumerable);   
console.log(descrptr1.prop2.enumerable);   
console.log(descrptr.prop1.value);   
console.log(descrptr1.prop2.value);  
console.log(descrptr1.prop3.value); 

/*Object.getOwnPropertyNames()  method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

*/

let phoneModel ={
      Apple: 'iphone11',
      OnePlus: 'OneNord',
      ZTE: 'Nubia'

}
console.log(Object.getOwnPropertyNames(phoneModel));

/*
The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.

*/

let Smartphone = {};
let a = Symbol('a');
let b = Symbol.for('b');

Smartphone[a] ='localSymbol';
Smartphone[b] = 'globalSymbol';

let Symbols = Object.getOwnPropertySymbols(Smartphone);

console.log(Symbols.length);

/*The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object. */

let prototype1 ={};
let obj1= Object.create(prototype1);
console.log(Object.getPrototypeOf(obj1)===prototype1);

/*The Object.is() method determines whether two values are the same value. */
let abc = { a: 1 };
let xyz = { a: 1 };
Object.is(abc, abc);         // true
Object.is(abc, xyz);         // false

/*The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). */

let Appple ={};
console.log(Object.isExtensible(Appple));

Object.preventExtensions(Appple);

console.log(Object.isExtensible(Appple));

/*The Object.isFrozen() determines if an object is frozen. */
let obj2 = {
      property1:22

}
console.log(Object.isFrozen(obj2));

Object.freeze(obj2);

console.log(Object.isFrozen(obj2)); 

/*The Object.isSealed() method determines if an object is sealed. */

let obj3 ={
      property2: 52
}
console.log(Object.isSealed(obj3));

Object.seal(obj3);

console.log(Object.isSealed(obj3));

/*The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. */

let obj4 ={
      a: 'Hyderabad',
      b: '2020',
      c: false
}

console.log(Object.keys(obj4));

/*The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). */

let obj5 = {};

Object.preventExtensions(obj5);

try {
      Object.defineProperty(obj5, 'property5', { value : 22});

}
catch(e){
      console.log(e);
}