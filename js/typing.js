export function startTyping(){
    const typingText=document.getElementById("typingText");
    const message="Voc\u00EA \u00E9 a melhor parte dos meus dias \u{1F495}";
    let index=0;

    function typeEffect(){
        if(index<message.length){
            typingText.textContent+=message[index];
            index++;
            setTimeout(typeEffect,70);
        }
    }

    typeEffect();
}
