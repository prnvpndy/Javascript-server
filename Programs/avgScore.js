/* Three player have played match 3 times here i'm finding out there avg score and who will wins
Joe scored 90, 102, 122 and Stiffy scored (92, 109, 111) same the third player scored (87, 145, 95)
*/

scoreJoe = (90 + 102 + 122) /3
scoreStiffy = (92 + 109 +11) /3
scoreMarry = (87 + 145 + 95) /3
console.log(scoreJoe, scoreStiffy)

if (scoreJoe>scoreStiffy && scoreJoe>scoreMarry){
      console.log("Joe \'s teams wins with" + scoreJoe + "points");
}else if(scoreStiffy>scoreJoe && scoreStiffy>scoreMarry){
      console.log("Stiffy \'s teams wins with" + scoreStiffy + "points");
}else if(scoreMarry>scoreJoe && scoreMarry>scoreStiffy){
      console.log("Mike \'s teams wins with" + scoreMarry + "points");
}
else {
      console.log("Match is draw"); 
}
      