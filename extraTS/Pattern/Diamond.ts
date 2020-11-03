export function diamondpattern(rows: number): void
{
let s1:string="",s2:string="";
for(let i=1;i<=rows;i++)
{
for(let j=1;j<=rows-i;j++)
{
s1+=" ";
}
for(let k=1;k<=i;k++)
{
s2+="* ";
}
console.log(s1,s2);
s1="";
s2="";
}
for(let i=rows;i>=1;i--)
{
for(let j=1;j<=rows-i;j++)
{
s1+=" ";
}
for(let k=1;k<=i;k++)
{
s2+="* ";
}
console.log(s1,s2);
s1="";
s2="";
}
}
/*for(let i=2;i<=10;i++)
{
    diamondpattern(i);
}*/
//diamondpattern(5);