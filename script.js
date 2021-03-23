var wrapper= document.body.querySelector(".wrapper");
a= 4
var output=document.createElement("div")
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div")
  var nameEle=document.createElement("h3")
  var ageEle=document.createElement("div")
  if(list[i].age>25){
    ele.style.color="green";
  }
  nameEle.innerHTML="Name: " +list[i].name;
  ageEle.innerHTML="Age: " +list[i].age;
  ele.appendChild(nameEle)
  ele.appendChild(ageEle)
  wrapper.appendChild(ele)
}

function number(b){
  if(b==1){
    a=a+1
  }
  output.innerHTML= "Counter:" + a
  wrapper.appendChild(output);
}

document.body.querySelector(".butt1").addEventListener("click", function(){
  number(1)
})