const drumPads = document.querySelectorAll('.drum-pad'); // selects all elements with drum-pad class stored as a nodelist (similar to array)
drumPads.forEach(pad => { //iterates through each element of the node list
    pad.addEventListener('click', () => playSound(pad.dataset.key));  //this adds a click event to each pad element when a pad is clicked it calls the playSound function with the key value of that pad
});

document.addEventListener('keyup', (event) => { // adds key up event listner to entire document
    const key = event.key.toUpperCase();  // converts the key pressed to uppercase
    const drumPad = document.querySelector(`.drum-pad[data-key="${key.charCodeAt(0)}`);  //looks for an element with the class drum-pad and data-key equal to the code of the key


    if (drumPad) { // looks if the drumpad variable is true if it is simulates a click on that pad
        drumPad.click();
    } 
});

function playSound(key) { // function to play sound using key
    const audio = document.querySelector(`audio[data-key="${key}`); //looks for audio element with data key equal to the key
    
    if (!audio) return; // checks that audio is not false if it is the function is ended
    audio.currentTime = 0; // causes audio to play from beginning
    audio.play();  //plays the selected audio
}

