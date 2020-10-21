

function armStrong(num){
      temp = num;
      sum = 0;
      d = num.toString().length;
      while(num!=0){
            r=num%10;
            sum = sum+Math.pow(r,d);
            num= parseInt(num/10);

      }
      
      if (temp==sum){


            
            console.log("This is armstrong number");
      } else {
            console.log("This is not armstong number");
      }
}
armStrong(1634);
