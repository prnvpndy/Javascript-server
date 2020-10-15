let str = "";

      function equilateralTriangle(nav){
            for(i=1;i<=nav;i++){
                  for(j=nav-1;j>=i;j--){
                        str=str.concat(" ");
                  }
                  for(k=1;k<=i;k++){
                        str=str.concat("* ");
                  }
                  str=str.concat("\n");
            }
            console.log(str);
            
      }
      
      equilateralTriangle(5);
      


