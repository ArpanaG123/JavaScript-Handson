//Q9. Check whether the triangle is Acute or Obtuse

//Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
//Note: You have to complete Triangle_Check. No need to take any input.

const Triangle_Check = (A,B,C) =>
{
  if (A < 90 && B < 90 && C < 90)
  {
    return ("acute");
  }
  else
  {
    return ("obtuse");
  }   
};
console.log(Triangle_Check(60,100,20));