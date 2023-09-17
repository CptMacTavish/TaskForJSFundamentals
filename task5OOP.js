/////////////////////////task1 Done///////////////////////////////////////

// class Circle  {
//     constructor(coordinates, rad) {
//         this.x = coordinates.x;
//         this.y = coordinates.y;
//         this.rad = rad;
//     }

//     toString() {
//         return `Circle with center in ${this.x},${this.y} and radius ${this.rad}`
//     }

//     getLength() {
//        return 2 * Math.PI * this.rad; 
//     }

//     static getLengthFromRadius(radius) {
//         return 2 * Math.PI * radius;
//     }

//     getCopy() {
//         return new Circle({x: this.x, y: this.y}, this.rad);
//     }

//     static createCircle(x, y, r) {
//         return new Circle({ x, y }, r);
//     }
    

//     checkPointInside(point) {
//         if(Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2) > this.rad) {
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
// }


////////////////////////////////task3 Done////////////////////////////////

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     getFullName() {
//         return `${this.surname} ${this.name} `;
//     } 
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     getFullName(middleName) {
//         return `${this.surname} ${middleName} ${this.name} `;
//     }

//     getCourse() {
//         const currentDate = new Date();
//         const currentYear = currentDate.getFullYear();
//         let result = currentYear - this.year;
//         return ++result;
//     }
// }

////////////////////////////////task5 Done////////////////////////////////


// class Worker {
    
//     #fullName;
//     #dayRate;
//     #workingDays;
//     #experience;

//     constructor(fullName, dayRate, workingDays, experience){
//         this.#fullName = fullName;
//         this.#dayRate = dayRate;
//         this.#workingDays = workingDays;
//         this.#experience = experience;
//     }

//     getSalary() {
//         return this.#dayRate * this.#workingDays;
//     }

//     getSalaryWithExperience(){
//         return this.#dayRate * this.#workingDays * this.#experience;
//     }

//     addWorkingDays(n) {
//         this.#workingDays += n;
//     }
    
//     static sortBySalary(workers) {
//         let sorted = workers.slice(0);
//         sorted = sorted.sort((a, b) => a.getSalary() > b.getSalary() ? 1 : -1);
//         return sorted;
//     }
    
//     get fullName() {  
//         return this.#fullName;
//     }

//     get dayRate() {
//         return this.#dayRate;
//     }

//     get experience() {
//         return this.#experience;
//     }

//     set fullName(value) {  
//         if(typeof value === 'string')
//             this.#fullName = value;
//     }
    
//     set dayRate(value) {
//         if(typeof value === 'number')
//             this.#dayRate = value;
//     }

//     set experience(value) {
//         this.#experience = value;
//     }
// }

////////////////////////////////task4 ////////////////////////////////

class Marker {
    #color
    #inkLevel = 100;

    constructor(color) {
      this.#color = color;
    }
  
    get color() {
      return this.#color;
    }
    
    set ink(level) {
        this.#inkLevel = level;
    }

    get inkLevel() {
      return this.#inkLevel;
    }
  
    print(text) {
      for (const char of text) {

        if (this.#inkLevel >= 10) {
          console.log(char); 
          if(char !== ' '){
            this.#inkLevel -= 10;
          } 
        }

        else if (this.#inkLevel < 10){
            break;
        }
      }
    }



  }
  
  class RefillableMarker extends Marker {
    refill() {
        this.ink = 100;
      }
  }
  
  
  const blueMarker = new Marker('blue');
  console.log(`Marker color: ${blueMarker.color}`);
  console.log(`Marker ink level: ${blueMarker.ink}`);
  blueMarker.print('Hello, World!');
  console.log(`Marker ink level: ${blueMarker.ink}`);
  refill(blueMarker)