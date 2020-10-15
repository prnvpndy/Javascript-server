console.log("My First Javascript Node Project");

let str = "";

      function diamondShape(nav){
            for(i=1;i<=nav;i++){
                  for(j=nav-1;j>=i;j--){
                        str=str.concat(" ");
                  }
                  for(k=1;k<=i;k++){
                        str=str.concat("* ");
                  }
                  str=str.concat("\n");
            }
            
            
            if(i==nav+1){
                  for(i=1;i<=nav-1;i++){
                     for(s=1;s<=i;s++){
                        str=str.concat(" ");
                     }
                     for(j=i;j<=nav-1;j++){
                        str=str.concat("* ");
                     }
                     str=str.concat("\n");
                     } 
               }
               
               console.log(str); 

      }
      
      diamondShape(10);


