module.exports = function solveEquation(equation) {
  let input = new String(equation);
  //console.log('input= '+input);
  let a = 0, b = 0, c = 0;
  let q = input.indexOf('* x^2');
  //console.log('q= '+q);
  if (q != -1) {
    a = input.slice(0, q-1);
    if (a=="") {
      a=1;
    }
    else if(a=="-"){
      a= -1;
    }
  
    //console.log('a= "'+a+'"');
    input = input.slice(q+6);

  }
  else{
    q = input.indexOf('x^2');
   // console.log('q= '+q);
    if (q != -1) {
      a = input.slice(0, q);
      if (a=="") {
        a=1;
      }
      else if(a=="-"){
        a= -1;
      }
    
      console.log('a= "'+a+'"');
      input = input.slice(q+4);
    }
  }
 // console.log('input= '+input);

  q = input.indexOf('* x');
  //console.log('q2= '+q);
  if (q != -1) {
    b = input.slice(0, q-1);
    if (b=="") {
      b=1;
    }
    else if(b=="-"){
      b = -1;
    }
    if (b[0] == '-'){
      b='-'+b.slice(2);
    }
    if (b[0] == '+'){
      b=b.slice(2);
    }
  
   // console.log('b= "'+b+'"');
    input = input.slice(q+4);

  }
  else{
    q = input.indexOf('x');
   // console.log('q2= '+q);
    if (q != -1) {
      b = input.slice(0, q);
      if (b=='') {
        b = 1;
      }
      else if(b == "-"){
        b = -1;
      }
    
      //console.log('b= "'+b+'"');
      input = input.slice(q+2);
    }
  }
  //console.log('input= '+input);

if (input.length > 0) {

  if (input[0] == '-'){
    c='-'+input.slice(2);
  }
  if (input[0] == '+'){
    c=input.slice(2);
  }
  //console.log('c= "'+c+'"');
  let D = Math.pow(b,2)-4*a*c

  let ans = [Math.round(((-1)*b+Math.sqrt(D))/(2*a)),Math.round(((-1)*b-Math.sqrt(D))/(2*a))];
  ans.sort((l,r) => l-r);
  //console.log('ans= '+ans);
  return ans;
}
}
