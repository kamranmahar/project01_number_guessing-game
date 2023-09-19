export let excuteGuess = (num, secrete) => {
    if (secrete < num) {
        console.log(`Your guess, ${num}, is too high.`);
    }
    else if (secrete > num) {
        console.log(`Your guess, ${num}, is too small.`);
    }
};
