const btnEle = document.getElementById("btn")
const birthdayEle = document.getElementById("birthday")
const resulEle = document.getElementById("result")
function calcula_age(){
    const birthdayValue = birthdayEle.value;
   if(birthdayValue === ""){
       alert("Please Enter Your Age")
   }else{
       const age = getAge(birthdayValue)
       resulEle.innerText = `Your Age is ${age} ${age > 1 ? ' Years' : 'year'}`
   }
}
function getAge(birth){
    const currentdate = new Date();
    const currentdayDate = new Date(birth)
    let age = currentdate.getFullYear() - currentdayDate.getFullYear()
    let month = currentdate.getMonth() - currentdayDate.getMonth()
    if(month < 0 || (month === 0 && currentdate.getDate() < currentdayDate.getDate())){
        age--;

    }
return age;
}
btnEle.addEventListener("click",calcula_age)