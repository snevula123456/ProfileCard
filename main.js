const head = "Please Meet Our Team";
let i = 0;

const typing = () =>{
    if(i < head.length){
        document.querySelector(".heading").innerHTML+= head.charAt(i);
        i++;
        //  setTimeout(typing,150);
    }
    setTimeout(typing,150);
}

typing();
