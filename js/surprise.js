export function initSurprise(){

    const btn=document.getElementById("surpriseBtn");
    const screen=document.getElementById("surpriseScreen");

    btn.addEventListener("click",()=>{
        screen.classList.add("active");
        createHearts();
    });

    function createHearts(){
        for(let i=0;i<25;i++){
            const heart=document.createElement("div");
            heart.textContent="\u{1F496}";
            heart.style.position="fixed";
            heart.style.left=Math.random()*window.innerWidth+"px";
            heart.style.bottom="0";
            heart.style.fontSize="1.5rem";
            heart.style.animation="floatUp 4s linear forwards";
            document.body.appendChild(heart);
            setTimeout(()=>heart.remove(),4000);
        }
    }
}
