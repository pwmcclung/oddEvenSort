function sortMyString(S) {
   
  let arr = S.split('')
  let evens = []
  let odds = []
  for (let i = 0; i < arr.length; i++){
    if (i % 2 !=0){
      odds.push(arr[i])
    }else{
      evens.push(arr[i])
    }
    
  }
 return evens.join('') + ' ' + odds.join('')
    
}
