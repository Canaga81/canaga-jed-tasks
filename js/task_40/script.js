let sentence = "paris cox gozel seherdir.";

function capitalizeWords(sentence) {
    let newSentenceArr = [];

    let sentenceArr = sentence.split(' ');

    sentenceArr.forEach((word) => {
        newSentenceArr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
    });

    console.log(newSentenceArr.join(' '));
}

capitalizeWords(sentence);