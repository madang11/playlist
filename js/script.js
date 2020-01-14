let songName = [" "];
let songArtist = [" "];
let songLength = [" "];
let image = [" "];
let link = [" "];

$(".button").click(function(){
    let newSong = $(".songNames").val();
    songName.push(newSong);
    $(".songName").empty();
    songName.forEach(function(name){
        $(".songName").append(name + " ");
    });

    let newArtist = $(".songArtists").val();
    songArtist.push(newArtist);
    $(".songArtist").empty();
    songArtist.forEach(function(artist){
        $(".songArtist").append(artist + " ")
    });
    let newList = $(".songLists").val();
    songList.push(newList);
    songList.forEach(function(length){
        $(".songLength").append(length + " ")
    });

    image.forEach(function(imagee){
        $(".image").append(`<img src = " ${imagee} ">`)
    });

    link.forEach(function(linkk){
        $(".link").wrap(`<a href= " ${linkk} "> Link </a>`);
    });
});
