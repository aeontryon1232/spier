var images = ["https://news.uga.edu/wp-content/uploads/2022/03/Spider1-2048x1366-1.jpg"]
var names = ["gold spider"];

var i = 0;

function update(){
    i++
    var numbers_of_family_member_in_array = 1
    if(i > numbers_of_family_member_in_array)
        {
            i = 0;
        }

        var updatedImage = images[i];

        var updaedName = names[i]  ;

        document.getElementById("images").src = updatedImage;
        document.getElementById("names").innerHTML = updaedName;
}


function gold_spider(){
   window.location="gold.html"
}

function diat(){
    window.location="gold_diat.html"
}

function bat(){
    window.location="https://www.sierraclub.org/sierra/2013-5-september-october/critter/bat-eating-spider"
}

function menu(){
    window.location="https://arachnoboards.com/threads/orb-weaver-feeding.339663/"
}

function right(){
    window.location="right.html"
}

function wrong(){
    window.location="gold_diat.html"
}

function gold_diat_quiz(){
    window.location="quiz.html"
}

function home(){
    window.location="index.html"
}

function size(){
    window.location="gold_size.html"
}

function location(){
    window.location="gold_location.html"
}