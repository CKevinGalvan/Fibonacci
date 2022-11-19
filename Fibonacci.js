function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
    //Write your code here:
    var nums = [];//0,1,1
    var sum=0;
    for(var i=0; i<n; i++)//3<10
    {
        if(i<=1)
        {
            nums[i]=i;
        }
       else
       {
            sum = nums[i-1]+nums[i-2];
            nums[i]=sum;
       }
    }
    return nums;
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
var nums = fibonacciGenerator(10);
console.log(nums);
