//Q5. Find the last digit of a 4 digit number.

//You are provided a four digit number N only. Your task is to print out the last digit of that number.

//Note:You have to complete Last_Digit function. No need to take any input.

const Last_Digit = (n) =>
{
    return n % 10;    
};

console.log(Last_Digit(4567));