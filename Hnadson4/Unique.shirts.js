//Q9. Unique Color Shirt
//Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.

//Note: As there are many shades of a color so consider integers as a color name.i.e, color of shirt is 0,1,2, … , N.

function Unique_Shirts (arr,N)
{
  let res = {};
  let count = 0;
  
  for(let i = 0;i<N;i++)
  {
    if(res[arr[i]])
    {
      res[arr[i]] += 1;
    }
    else
    {
      res[arr[i]] = 1;
    }
  }
  let resValues = Object.values(res);
  for(let j = 0;j<resValues.length;j++)
  {
    if(resValues[j] === 1)
    {
      count ++;
    }
  }
  return count;
}

