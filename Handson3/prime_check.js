//Q7. Check whether a Number is a prime or not.

//Write a program which takes  a number from user and check whether number is prime number or not a prime number.
//Note: You have to complete Prime_Check. No need to take any input.

const Prime_Check = (N) => 
{
  let count = 0;
	for(let i = 1;i<=N;i++)
	{
	  if (N % i === 0)
	  {
	    count ++;
	  }
	}
	
	if(count == 2)
	{
	  return "YES";
	}
	else
	{
	  return "NO";
	}
};
console.log(Prime_Check(7));

