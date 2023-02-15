const button = document.querySelector(".btn")
   let i=1
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
    const obj = {
        "name":name,
        "email":email,
        "phone":phone,
        "date": date,
        "time":time
    }
    const serialised= JSON.stringify(obj)
    localStorage.setItem(`obj${i}`,serialised)
     i=i+1 
}

