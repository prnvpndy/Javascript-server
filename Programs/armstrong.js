

function armStrong(num){
      temp = num;
      sum = 0;
      while(num!=0){
            r=num%10;
            sum = sum+(r*r*r);
            num= parseInt(num/10);

      }
      
      if (temp==sum){


            
            console.log("This is armstrong number");
      } else {
            console.log("This is not armstong number");
      }
}
armStrong(153);
