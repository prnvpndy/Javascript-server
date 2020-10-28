function leapYear(year){
      if((year%4==0)||(year%100==0)){
          console.log(year + " is Leap Year");
      }
      else{
          console.log(year + " is not a leap Year");
          }
  
  }
  leapYear(2005);