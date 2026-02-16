export function startParticles(container){

    function createSpark(){
        const spark=document.createElement("div");
        spark.className="sparkle";
        spark.style.left=Math.random()*window.innerWidth+"px";
        spark.style.top=Math.random()*window.innerHeight+"px";
        container.appendChild(spark);
        setTimeout(()=>spark.remove(),2000);
    }

    setInterval(createSpark,300);
}
