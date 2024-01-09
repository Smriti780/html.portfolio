let namastebtn=document.querySelector('button');
namastebtn.addEventListener('click',showmsg);

function showmsg(){
    let name=prompt('Enter Name of Student');
    namastebtn.textContent= 'Roll No. 1: '+ name;
}