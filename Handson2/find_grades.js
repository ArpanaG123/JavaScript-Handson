//Q5. Find Grades

//Your school has the following grading system based upon the marks(M) obtained by a student:
//1.If M ≤ 10,the grade will be E.
//2.If 11 >= M <= 20,the grade will be D.
//3.If 21 >= M <= 30,the grade will be C.
//4.If 31 >= M <= 40,the grade will be B.
//5.If 41 >= M <= 50,the grade will be A.
//Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.

//Note : You have to complete findGrades function. No need to take any input.

const findGrades = (a) =>
{
  switch(true){
    case (a <= 10):
      return ("E");
      break;
      
    case (a <=20 && a >= 11):
      return ("D");
      break;
      
    case (a <= 30 && a >= 21):
      return ("C");
      break;
    
    case (a <= 40 && a >= 31):
      return ("B");
      break;
      
    case (a <= 50 && a >= 41):
      return ("A");
      break;
      
    default:
    return "Invalid grade";
    break;
    
  }
};

console.log(findGrades(1));



