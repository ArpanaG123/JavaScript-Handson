//Print the pattern.

//Write a program which ask user for no of lines and print a pattern using an asterik .
//Note: You have to complete Print_pattern. No need to take any input.


const Print_pattern = (N) => 
{
  let star = "";
  for(let i = 1;i<=N;i++)
  {
    for(let j = 0;j<i;j++)
    {
      star += "*";
    }
    star += "\n";
  }
  return(star);
};
console.log(Print_pattern(5));