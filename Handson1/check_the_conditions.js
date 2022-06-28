//Q3. Check the conditons.

//You are given two numbers A and B.You need to do the following checks:
//1.if both are divisible by 10 console true.
//2.if both are not divisible by 10 console false.
//3.if one of them only is divisible by 10 console true.
//Use operator to do this.

//Note:You have to complete Check function. No need to take any input.

const Check = (A, B) => 
{
    if (A % 10 === 0 && B % 10 === 0)
    {
        return true;
    }
    else if (A % 10 !== 0 && B % 10 !== 0)
    {
        return false;
    }
    else
    {
        return true;
    }
};

console.log(Check(12,20));