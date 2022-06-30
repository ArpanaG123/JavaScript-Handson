//Q8. Second Smallest.

//You are given 3 distinct integers X,Y and Z, and your task is to find and return the second smallest integer among the three provided integers.
//Note: You have to complete findSndSmallest function. No need to take any input.

const findSndSmallest = (x,y,z) =>
{
  if ((x > y && x < z) || (x>z && x<y))
  {
    return x;
  }
  else if ((y>x && y<z)||(y>z && y<x))
  {
    return y;
  }
  else if ((z>x && z<y)||(z>y && z<x))
  {
    return x;
  }

};
console.log(findSndSmallest(2,9,23));
