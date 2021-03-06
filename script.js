const message = document.getElementById("message");

/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/
let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

message.addEventListener('change', () => {

    messageWords = message.value.split(' ');


    if(messageWords.length >= 20) {
        let countWords = {};

        messageWords.forEach(word => {
            let w = word.toLowerCase();

            if(!countWords[w]) {
                countWords[w] = 1;
                numberOfWordsInTheMessage++;
            } else {
                countWords[w]++;
            }
        })

        let max = -1;
        for (let key in countWords) {
            if(countWords[key] > max) {
                max = countWords[key];
                theMostFrequentWord = key;
            }
        }
        
        let numberOfElementsInTheArray = messageWords.length;

        console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
        console.log(`The number of words in the message is "${numberOfElementsInTheArray}"`);
    }
});

const button = document.getElementById('submit');

button.addEventListener('click', () => {
    // Random phrases and its pictures (represented as an array of objects)
    const randomPhrasesAndPictures = [
        {
            phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
            imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"//idk why this image isnt loading even when the link is pasted in the browser
        },
        {
            phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
            imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
        },
        {
            phrase: "You are a wizard, Harry (c) Hagrid",
            imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
        }
    ]

    const rand = Math.floor(Math.random() * 3);     // returns a random integer from 0 to 2]
    const phrase = document.getElementById('phrase');
    const picture = document.getElementById('picture');

    phrase.innerText = randomPhrasesAndPictures[rand].phrase;
    picture.src = randomPhrasesAndPictures[rand].imageURL;
}, false);
