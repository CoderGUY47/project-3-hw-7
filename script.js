let num = prompt("Enter a value : ")

// using for loop
console.log("For loop")
for (let i = 1; i <= 10; i++) 
{
    console.log(num + " x " + i + "  = " + num*i)
}
// using while loop
console.log("For While loop")
let j = 1;
while (j <= 10) {
    console.log(num + " x " + j + "  = " + num*j)
    j++;
}

// using do-while loop
console.log("For do-while loop")
let k = 1;
do 
{
    console.log(num + " x " + k + "  = " + num*k)
    k++;
} while (k <= 10);
