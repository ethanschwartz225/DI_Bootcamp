// Daily Challenge
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
}

const newVideo = new Video("the Batman Movie", "Ethan", "2.5 hours");
console.log(newVideo.watch());











