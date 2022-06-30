//Q3. Eligible Voter

//You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
//Note : You have to complete isEligible function. No need to take any input

const isEligible = (a) =>
{
  if (a >= 18)
  {
    return ("Eligible for Voting");
  }
  else
  {
    return ("Not Eligible for Voting");
  }
};

console.log(isEligible(13));
