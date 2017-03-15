function printString(string){
  console.log(string[0])
  if(string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else{
    return true
  }
}

function reverseString(string){
  // pizza
  // a +
  if(string.length > 1){
    let substring = string.substring(0, string.length -1)
    return string[string.length -1] + reverseString(substring)
  } else {
    return string
  }
}


function isPalindrome(string){
  if(string.length < 2){
    return true
  } else {
    let substring = string.substring(1, string.length - 1)
    return (string[0] == string[string.length -1] && isPalindrome(substring))
  }
}

function addUpTo(array, index){
  if(index === 0){
    return array[0]
  } else {
    return addUpTo(array, index-1) + array[index]
  }
}


function maxOf(array){
  if(array.length == 1){
    return array[0]
  } else {
    let subArray = array.slice(0, array.length -1)
    let currentMax = maxOf(subArray)
    let newMax = currentMax > array[array.length -1] ? currentMax : array[array.length -1]
    return newMax;
  }
}

function includesNumber(array, number){
  if(array.length < 2){
    return (array[0] == number)
  }else{
    let subarray = array.slice(0, array.length - 1)
    return(includesNumber(subarray, number) || (array[array.length -1] == number))
  }
}
