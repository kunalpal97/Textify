
// audio setup 

const keyStrokeSounds = [
    new Audio("/sounds/keystroke1.mp3"),
    new Audio("/sounds/keystroke2.mp3"),
    new Audio("/sounds/keystroke3.mp3"),
    new Audio("/sounds/keystroke4.mp3"),
];


function useKeyboardSound() {

    const playRandomKeyStrokeSound = () => {

        // random select in array

        const randomSound = keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];
        randomSound.currentTime = 0; // Better for user Experinace here
        randomSound.play().catch(err => console.log("Audio Play failed :" , err));


    }

    return playRandomKeyStrokeSound;
}


export default useKeyboardSound;