/* Will create a program for storing the value in the form of array. So Joe visit resturant and he wanted to tip the waiter 
if the food amount is less the 50rs then he he give 20% of the amount for tip, if food bill is in between 50rs to 200rs then he give 15%
and if the value is more than 200rs then joe wanted to give 10% of bill as tip to waiter */

function tipCalc(bill){
      var percentage;
      if (bill<50){
            percentage = 0.2;
      }else if(bill>50 && bill<200){
            percentage= .15;
      }else {
            percentage= .1;
      }
      return percentage * bill;

}
bills = [124, 29, 207];

tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

fianlValue = [bills[0] + tips[0], 
              bills[1] + tips[1], 
              bills[2] + tips[2]];

console.log(tips,fianlValue);


