let songName = ["cat"];
songName.forEach(function(name){
    $(".songName").append(name)
});

let songArtist = ["cat"];
songArtist.forEach(function(artist){
    $(".songArtist").append(artist)
});

let songLength = ["cat"];
songArtist.forEach(function(length){
    $(".songLength").append(length)
});

let image = ["https://placekitten.com/g/100/250"];
image.forEach(function(imagee){
    $(".image").append(`<img src = " ${imagee} ">`)
});

let link = ["cat"];
link.forEach(function(linkk){
    $(".link").wrap(`<a href= " ${linkk} "> Link </a>`);
});
