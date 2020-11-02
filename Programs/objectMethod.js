/* In this will calculate BMI(Body Mass Index) of Joe and Stiffy but this time with Objects and Methods */

Joe = {
      fullName: 'Joe Stiffy',
      mass: 98,
      height: 1.98,
      totalBMI: function(){
            this.BMI = this.mass / (this.height * this.height);
            return this.BMI;
      }

}

Stiffy = {
      fullName: 'Stiffy Joe',
      mass: 85,
      height: 1.72,
      totalBMI: function(){
            this.BMI = this.mass / (this.height * this.height);
            return this.BMI; 
      }

}
Joe.totalBMI();
Stiffy.totalBMI();

console.log(Joe, Stiffy);

if(Joe.BMI>Stiffy.BMI){
      console.log(Joe.fullName + 'has the higher BMI of ' + Joe.BMI);
}else if(Stiffy.BMI>Joe.BMI){
      console.log(Stiffy.fullName + ' has the higher BMI of ' + Stiffy.BMI);
} else {
      ("They both have same BMI");
}




