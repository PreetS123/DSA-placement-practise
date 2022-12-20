
 function DanceNight(girl,boy,g,b){
    if(b>g){
        console.log('Cannot form a pair');
        
    }
    let c=0;
   for(let i=0; i<g; i++){
      if(girl[i]<boy[i]){
        c++;
      }
   }
   if(c==b){
    console.log('PAIR FORMED')
   }else{
    console.log('Pair not formed')
   }
 }

  let boy=[2, 5, 6 ,8];
  let girl=[3,8,5,1,7];
  let g=girl.length;
  let b=boy.length;

  DanceNight(girl,boy,g,b)

