export function startFlowers(container){

    const emojis=["\u{1F339}","\u{1F338}","\u{1F33A}","\u{1F33C}","\u{1F33B}","\u{1F490}","\u2764\uFE0F","\u{1F495}","\u{1F496}","\u{1F497}","\u{1F49D}","\u{1F49E}"];

    function createFlower(){
        if(document.querySelectorAll(".flower").length>60) return;

        const flower=document.createElement("div");
        flower.className="flower";
        flower.textContent=emojis[Math.floor(Math.random()*emojis.length)];

        flower.style.left=Math.random()*window.innerWidth+"px";
        flower.style.top="-30px";
        flower.style.animationDuration=(Math.random()*5+8)+"s";

        container.appendChild(flower);
        setTimeout(()=>flower.remove(),13000);
    }

    setInterval(createFlower,200);
}
