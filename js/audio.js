export function initAudio(){
    const audio=document.getElementById("audio");
    const btn=document.getElementById("audioBtn");
    if(!audio||!btn) return;

    const setButtonState=()=>{
        btn.textContent=audio.paused?">":"||";
    };

    const tryPlay=()=>{
        return audio.play().then(()=>{
            setButtonState();
            return true;
        }).catch(()=>{
            setButtonState();
            return false;
        });
    };

    const playOnFirstInteraction=()=>{
        const start=()=>{
            tryPlay();
            window.removeEventListener("click",start);
            window.removeEventListener("touchstart",start);
            window.removeEventListener("keydown",start);
        };
        window.addEventListener("click",start,{once:true});
        window.addEventListener("touchstart",start,{once:true});
        window.addEventListener("keydown",start,{once:true});
    };

    btn.addEventListener("click",()=>{
        if(audio.paused){
            tryPlay();
        }else{
            audio.pause();
            setButtonState();
        }
    });

    setButtonState();
    tryPlay().then((played)=>{
        if(!played) playOnFirstInteraction();
    });
}
