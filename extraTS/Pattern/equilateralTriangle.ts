export function equilateTriangle(noOfRows: number): void
{
let str:string= "";

for(let i = 1; i <=noOfRows; i++ ){

    for(let j = 1; j<=(noOfRows-i); j++)
    {
         
            str = str.concat(" ");
        }
        for(let k=1;k<=i;k++)
        {
            str = str.concat("* ")
        }
      str = str.concat("\n")
    }
    
    console.log(str);
}

/*
for(let i=2;i<=10;i++)
{
    equilateTriangle(i);
}*/
