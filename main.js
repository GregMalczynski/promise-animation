//@ts-check

const framesAnimation = document.getElementById('frames-animation');
const text = document.getElementById('text');

// check if querySelector elements are enable 
if ( !framesAnimation ) {
    console.log('Disable frames-animation element')
}

if ( !text ) {
    console.log('Disable text element')
}

// array with string frames 
/**
 * @type Array<string> framesArray
 */
const framesArray = ['|', '/', '-', '\\', 'done!'];

// frame to frame time 
/**
 * @type {number} promiseInterval
 */
const promiseInterval = 100;

// async function
const asyncFnc = async() => {
    await frame1(promiseInterval); // frame 1
    await frame2(promiseInterval); // frame 2
    await frame3(promiseInterval); // frame 3
    await frame4(promiseInterval); // frame 4
}

// frame 1 Promise function
function frame1(promiseInterval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(framesAnimation.innerText = framesArray[0])
        }, promiseInterval );
    })
}
// frame 2 Promise function
function frame2(promiseInterval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(framesAnimation.innerText = framesArray[1])
        }, promiseInterval );
    })
}
// frame 3 Promise function
function frame3(promiseInterval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(framesAnimation.innerText = framesArray[2])
        }, promiseInterval );
    })
}
// frame 4 Promise function
function frame4(promiseInterval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(framesAnimation.innerText = framesArray[3])
        }, promiseInterval );
    })
}

// Play Interval sequence function
function playSeq() {
    
    let intervalSeq = setInterval(asyncFnc, (promiseInterval * 4))
    // after 10 seconds animation stop
    setTimeout(() => {
        // Set "Done!" in text selector / yellow color
        text.style.color = 'yellow'
        text.innerText = framesArray[4]
        clearInterval(intervalSeq)
        framesAnimation.style.color = 'black'
    }, 10000) // 10 seconds interval
}
playSeq()