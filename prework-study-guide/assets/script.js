var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];


function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

listTopics()
selectTopic()
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
/*
function helloWorld() {
    console.log("Hello, world, I am a function!")
}*/