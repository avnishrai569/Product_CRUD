//TASK 1 : Array Manipulation 

function uniqueelements(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  const arr = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueelements(inputArray);
  console.log(resultArray);



  // TASK 2 : Object Operations 

const car1 = { brand: 'Toyota', model: 'Camry', year: 2022 };
const car2 = { color: 'Blue', fuelType: 'Petrol' };

function mergeCars(car1, car2) {
  return { ...car1, ...car2 };
}

const mergedCar = mergeCars(car1, car2);
console.log(mergedCar);

// TASK 3 : Logical Operations 

function findCommonElements(array1, array2) {
    let commonElements = [];
  
    for (let i = 0; i < array1.length; i++) {
      if (array2.indexOf(array1[i]) !== -1) {
        commonElements.push(array1[i]);
      }
    }
  
    return commonElements;
  }
  
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  const resultCommonElements = findCommonElements(array1, array2);
  console.log(resultCommonElements);
  
