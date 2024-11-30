// const arr = [1, 5, 7, 9];

// function findMin (arr){
//     return Math.min(...arr);
// }
// console.log(findMin(arr));





// const createCounter = () => {
//     let count = 0;
//     return {
//         increment() {
//             return ++count ;
//         },

//         decrement() {
//             return --count ;
//         },

//         getValue(){
//             return count;
//         }

//     }
// }
// const counter = createCounter();
// console.log(counter.increment()); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.getValue()); 




function findElementByClass (elem, className) {
    if (elem.classList.contains(className)) {
        return elem;
    }

    for (let i = 0; i < elem.children.length; i++) {
        const found = findElementByClass(elem.children[i], className);
        if (found) {
            return found;
        }
        
    }

    return "Элемент не найден";
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); 
