//Q1. Calculator.

//Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
//Note : You have to complete Calculator. No need to take any input

const Calculator = (A, B, C) => 
{
  switch(A){
    case '+':
      return B + C;
      break;
      
    case '-':
      return B - C;
      break;
      
    case '*':
      return B * C;
      break;
      
    case '/':
      return B / C;
      break;
      
    default:
    return "Invalid operation";
    break;  
  }
};

console.log(Calculator("+",1,2));