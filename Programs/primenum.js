function primeNumber(num){
      flag=0;
      let i;
      if(num==0||num==1){
          console.log(" composite");
      }
      else{
          for( i=2;i<num/2;i++){
              if(num%i==0){
                  //console.log("not prime");
                  flag=1;
                  n=i;
                  
                  
              }
              
          }
          if(flag==0){
              console.log(num +" is Prime Number");
          }
          else{
              console.log(num + " is not Prime Number");
          }
      }
  }
  primeNumber(7);