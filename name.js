const typedText = document.getElementById('typed-text');
const cursor = document.getElementById('cursor');
const words = ['Templates', 'UI design', 'Webdesign', 'UI elements'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 2000;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typedText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        // Pause at the end of the word
        setTimeout(() => isDeleting = true, pauseBetweenWords);
    } else if (isDeleting && letterIndex === 0) {
        // Move to the next word after deleting
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, currentSpeed);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => setTimeout(type, 1000));
