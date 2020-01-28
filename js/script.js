let song = {
    name: "roxanne"
    
}


/*let songName = [" "];
let songArtist = [" "];
let songLength = [" "];
let songImage = [" "];
let songLink = [" "];

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
    let newLength = $(".songLengths").val();
    songLength.push(newLength);
    songLength.forEach(function(length){
        $(".songLength").append(length + " ")
    });

    let newImage = $(".songImages").val();
    songImage.push(newImage);
    songImage.forEach(function(image){
        $(".songImage").append(image + " ")
    });
    let newLink = $(".songLinks").val();
    songLink.push(newLink);
    songLink.forEach(function(link){
        $(".songLink").append(`<a href= " ${link} "> Link </a>`);
    });
});
