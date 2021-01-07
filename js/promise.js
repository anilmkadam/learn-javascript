const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: "User Left",
                message: ":("
            });
        }
        else if(userWatchingCatMeme) {
            reject({
                name: "user watching cat meme",
                message: "cat meme is more popular than tutorial"
            });
        }
        else {
            resolve("thumbs and subscribe the channel!!");
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log(message);
}).catch(error => {
    console.log(error.name + " - " + error.message);
});
