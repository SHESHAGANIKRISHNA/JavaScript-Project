var emp= [{
    name:'krishna',
    salary:'25000',
},
{
    name:'Raj',
    salary:'25000',
},
{
    name:'Deepak',
    salary:'25000',
},
{
    name:'Varun',
    salary:'25000',
}
]

console.log(emp);  

var obj = new Object();
obj.name='krishna';
obj.age=25;
obj.çompany='jspiders';
console.log(obj);

var test = Object.entries(obj);
console.log(test);

var EmpData= {
empname:"Krishna",
empage:26,
empcompany:"jspiders",
empsalary:"300000",

empDetails:function(){
    /*`` this one is call tild */
    document.write(`<h1> my name is ${this.empname} </h1>
<ul>
    <li>my age is ${this.empage} </li>
    <li>i am working in ${this.empcompany} </li>
</ul>` )
}
};
EmpData.empDetails();
for (var i=0; 1<=10; i++){
    var username="aaa"
    console.log(i); 
}
console.log(username);///globel scope

 function user(){
var age=20;
console.log(age); //function scope
 }
 user();
     

