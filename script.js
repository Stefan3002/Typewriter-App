const container = document.querySelector(".container")
const speed = 250
var i = 0
const words = ["After this test ends, your text will be typed. Remember to click \"refresh\"!"]
var index = -1
const waitBeforeDelete = 2000
const acceleration = 8
var waitBeforeNextType = 200

document.querySelector("button").addEventListener("click",function(){
    waitBeforeNextType = document.querySelector("input").value * 1000
    words[0] = document.querySelector("#Text").value
})


helpTypeWrite()

function helpTypeWrite(){
    index += 1
    if(index > words.length - 1)
        index = 0
    typeWrite(words[index])
}

function typeWrite(word){
    if(i < word.length){
        container.innerHTML += (word[i] + "<span class='pointer'>"+ '|' + "</span>")
        i++
        setTimeout(function(){helper(word)},waitBeforeNextType)
    }
    else
        setTimeout(function(){deleteWord(word)},waitBeforeDelete)
}

function deleteWord(word){
    if(i > 0){
        container.textContent = container.textContent.slice(0,i - 1)
        i--
        setTimeout(function(){deleteWord(word)}, speed - word.length * 11)
    }
    else
        helpTypeWrite()
}

function helper(word){
    console.log("sd")
    container.textContent = container.textContent.slice(0, container.textContent.length - 1)
    setTimeout(function(){typeWrite(word)},speed - word.length * acceleration)
}