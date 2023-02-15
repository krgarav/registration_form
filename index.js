const button = document.querySelector(".btn")
button.addEventListener("mouseover",(e)=>{
    e.preventDefault()
    document.querySelector("#form").style.backgroundColor="#ccc"
    
    
        
})
button.addEventListener("mouseout",(e)=>{
    e.preventDefault()
    document.querySelector("#form").style.backgroundColor="#FFFFFF"
})

function submitform(event){
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const phone=document.getElementById('phone').value
    const date=document.getElementById('date').value
    const time=document.getElementById('time').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(date);
    console.log(time);
    event.preventDefault();
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("date",date)
    localStorage.setItem("time",time)
    
}

