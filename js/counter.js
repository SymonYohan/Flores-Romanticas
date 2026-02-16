export function startCounter(){
    const counter=document.getElementById("counter");
    const startDate=new Date("2026-01-28 00:00:00");

    function update(){
        const now=new Date();
        const diff=now-startDate;

        const days=Math.floor(diff/(1000*60*60*24));
        const hours=Math.floor((diff/(1000*60*60))%24);
        const minutes=Math.floor((diff/(1000*60))%60);
        const seconds=Math.floor((diff/1000)%60);

        counter.textContent=
        `Juntos h\u00E1 ${days} dias, ${hours}h ${minutes}m ${seconds}s \u{1F496}`;
    }

    setInterval(update,1000);
}
