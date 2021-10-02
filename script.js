let saveEl = document.getElementById("save-el") // What appears in the saved entries box
let saveEl2 = document.getElementById("save-el2") // What appears in the saved entries box

let countEl = document.getElementById("count-el") // What appears in the current count box
let countEl2 = document.getElementById("count-el-2") // What appears in the current count box

let totalEl = document.getElementById("total") // What appears next to total, adds up all saved entries
let totalEl2 = document.getElementById("total2") // What appears next to total, adds up all saved entries

let sum = 0
let sum2 = 0

let savedNumbers = [] // Empty array to hold the current count values
let savedNumbers2 = [] // Empty array to hold the current count values

let count = 0
let count2 = 0

const str = "Total: "
const str2 = "Total: "



/****************************************************************************************************************************
✅ Increments the current count by 1 when the increment button is pressed
****************************************************************************************************************************/
function increment() {
    count += 1
    countEl.textContent = count   
}

function increment2() {
    count2 += 1
    countEl2.textContent = count2   
}
/****************************************************************************************************************************
✅ deducts the current count by 1 when the decrement button is pressed
****************************************************************************************************************************/

function decrement() {
    count -= 1
    countEl.textContent = count  
    
}
function decrement2() {
    count2 -= 1
    countEl2.textContent = count2  
    
}
/*****************************************************************************************************************************
✅ Saves the count when the save button is clicked
*****************************************************************************************************************************/

  
function save() {
   let countStr = count + " + "
    saveEl.textContent += countStr
  //displays zero in the count box
    countEl.textContent = 0
    //adds every count into the array
   savedNumbers.push(count)  
    total(savedNumbers)
    //reset the count back to zero
    count = 0
}

function save2() {
   let countStr2 = count2 + " + "
    saveEl2.textContent += countStr2
  //displays zero in the count box
    countEl2.textContent = 0
    //adds every count into the array
   savedNumbers2.push(count2)  
    total2(savedNumbers2)
    //reset the count back to zero
    count2 = 0
}
/****************************************************************************************************************************
✅ Clears the saved entries, and the total displayed, when the Clear button is pressed
****************************************************************************************************************************/
function cleared() {
 saveEl.textContent = " "
 totalEl.textContent = "Total: "
 sum = 0
 }

function cleared2() {
 saveEl2.textContent = " "
 totalEl2.textContent = "Total: "
 sum2 = 0
 }

/*****************************************************************************************************************************
✅ Adds up the total of the saved entries which are stored in the array
*****************************************************************************************************************************/
function total(array){

   console.log(array)
for (let i = 0; i < array.length; i++) {
    sum += array[i];
  // array = 0
clearArray()
  totalEl.textContent = str + sum 
  }
}

function total2(array2){
   console.log(array2)
for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
clearArray2()
  totalEl2.textContent = str2 + sum2 
  }
}


/****************************************************************************************************************************
✅ Clears the arrays contents
****************************************************************************************************************************/
function clearArray(){
  savedNumbers.length = 0 
}

function clearArray2(){
  savedNumbers2.length = 0 
}

