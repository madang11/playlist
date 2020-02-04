let roxanne = {
    name: "roxanne",
    artist: "Arizona Zervas",
    length: "3:20",
    image: "",
    Link: ""}
let songs = [roxanne]
    

$(".button").click(function(){
    let newSong = $(".songNames").val();
    let newArtist = $(".songArtists").val();
    let newLength = $(".songLengths").val();
    let newImage = $(".songImages").val();
    let newLink = $(".songLinks").val();

    $('')

    songs.forEach(function(song){
        $(".songName").append("<li>" + song.name + "</li>")
        $(".songArtist").append("<li>" + song.artist + "</li>")
        $(".songLength").append("<li>" + song.length + "</li>")
        $(".songImages").append("<li>" + song.image + "</li>")
        $(".songLinks").append("<li>" + song.link + "</li>")



})

/* let newSong = $(".songNames").val();
    let newArtist = $(".songArtists").val();
    let newLength = $(".songLengths").val();
    let newImage = $(".songImages").val();
    let newLink = $(".songLinks").val();
    song.name = song['name'] + newSong
    $(".songName").empty();
    $(".songName").append(newSong)

    song.artist = song['artist'] + newSong
    $(".songArtist").empty();
    $(".songArtist").append(song.name)
v
    song.length = song['length'] + newLength
    song.image = song['image'] + newImage
    song.songLink = song['songLink'] + newLink
 });
let songName = [" "];
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
    */
});


