//Q11. Birthday Game
//Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i].
//She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D. 
//You must determine how many ways she can divide the chocolate.

function Birthday_Game(arr,D ,M)
{
  let count = 0;
  for(let i = 0;i<=arr.length - M;i++)
  {
    let sum = 0;
    for(let j = i;j<i+M;j++)
    {
      sum += arr[j];
    }
    if(sum === D)
    {
      count++;
    }
  }
  return count;
}

