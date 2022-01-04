let drum = $(".drum")

for (let i = 0; i < drum.length; i++) {
    let drumClick = drum[i];
    $(drumClick).on("click", function() {
        const letter = $(drumClick).text();
        playAudio(letter);
        addAnimation(drumClick);
    })    
}

$(document).on("keypress", function(event) {
    playAudio(event.key);
})

function playAudio(key) {
    switch (key) {
        case "w":
            const boom = new Audio("./SoundsAudio/boom.wav" );
            boom.play();
            break;

        case "a":
            const clap = new Audio("./SoundsAudio/clap.wav" );
            clap.play();
            break;

        case "s":
            const hihat = new Audio("./SoundsAudio/hihat.wav" );
            hihat.play();
            break;

        case "d":
            const kick = new Audio("./SoundsAudio/kick.wav" );
            kick.play();
            break;

        case "f":
            const openhat = new Audio("./SoundsAudio/openhat.wav" );
            openhat.play();
            break;

        case "j":
            const ride = new Audio("./SoundsAudio/ride.wav" );
            ride.play();
            break;

        case "k":
            const snare = new Audio("./SoundsAudio/snare.wav" );
            snare.play();
            break;

        case "l":
            const tink = new Audio("./SoundsAudio/tink.wav" );
            tink.play();
            break;

        case "o":
            const tom = new Audio("./SoundsAudio/tom.wav" );
            tom.play();
            break;
    
        default:
            console.log(key)
            break;
    }
}

function addAnimation(animation) {
    $(animation).animate({fontSize : "4rem"})
    setTimeout(() => {
        $(animation).animate({fontSize : "3rem"});
    }, 100);
}