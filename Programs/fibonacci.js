function Fibonacci(num){
      let n1=0,n2=1,n3;
      let nav="";
      nav=nav+n1+" "+n2;
      
      for(let i=2;i<=num;i++){
          n3=n1+n2;
          nav=nav+" "+n3
          
          n1=n2;
          n2=n3;
      }
      console.count(nav);
      
  }
  Fibonacci(12);
  
  
  
  