console.log("My First Javascript Node Project");

let pattern = "";

      function diamondShape(nav){
            for(i=1;i<=nav;i++){
                  for(j=nav-1;j>=i;j--){
                        pattern=pattern.concat(" ");
                  }
                  for(k=1;k<=i;k++){
                        pattern=pattern.concat("* ");
                  }
                  pattern=pattern.concat("\n");
            }
            
            
            if(i==nav+1){
                  for(i=1;i<=nav-1;i++){
                     for(s=1;s<=i;s++){
                        pattern=pattern.concat(" ");
                     }
                     for(j=i;j<=nav-1;j++){
                        pattern=pattern.concat("* ");
                     }
                     pattern=pattern.concat("\n");
                     } 
               }
               
               console.log(pattern); 

      }
      
      diamondShape(100);


