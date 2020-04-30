
// while-ov
function binarySearch(arr,num){

let start;
let end =arr.length-1;
let i=Math.floor(end/2)

while(arr[i]!==num){

if(num>arr[i]){
 start=i+1;

}
if(num<arr[i]) {

end=i-1;
}
i=Math.floor((start+end)/2);

}
return i;

}

//recursia-ov

function binarySearch(arr,num,start=0,end=arr.length-1){
let i=Math.floor((start+end)/2)

  if(arr[i]===num){
    return i;
  }

  if(num>arr[i]){
  start=i+1;
  return binarySearch(arr,num,i+1,end)
  }
  if(num<arr[i]) {

  end=i-1;
  return binarySearch(arr,num,start,i-1)
  }
}