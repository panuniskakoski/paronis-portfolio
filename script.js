console.log("HEY")

let themeDots = document.getElementsByClassName('themed-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        console.log("option clicked")
    })
}