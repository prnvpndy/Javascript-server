function palindrome(num){
      temp = num;
      sum = 0;
      while (num>0){
            r=num%10;
            sum = (sum*10)+r;
            num=parseInt(num/10);
      }
      if(temp==sum){
            console.log("Number is Palindrome");
      }else{
            console.log("Number is not Palindrome");
      }
}
palindrome(151);