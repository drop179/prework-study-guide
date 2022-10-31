function selectTopic() {

    if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topic === 'Git') {
        console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

function listTopics() {
    for (var x = 0; x < listTopics.length; x++) {
        console.log(listTopics[x]);
    }
}
/*
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}*/
/*
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
*/

function helloWorld() {
    console.log("Hello, world, I am a function!")
}