//Q4. Find Relation.

//PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.
//The relationships between integers X and Y are as follows:
//1.If X < Y,it means that X is smaller than Y.
//2.If X > Y,it means that X is greater than Y.
//3.If X = Y,it means that X is equal to Y.

//Note : You have to complete findRelationship function. No need to take any input.

const findRelation = (x,y) =>
{
  if (x < y)
  {
    return (`${x} is smaller than ${y}`);
  }
  else if ( x > y)
  {
    return (`${x} is greater than ${y}`);
  }
  else
  {
    return (`${x} is equal to ${y}`);
  }
};
console.log(findRelation(3,11));


