export async function fetchSong(id) {
    const response = await fetch('https://webmob-ui-22-spotlified.herokuapp.com/api/artists/'+id+'/songs')
    const songs = await response.json()
   // const artist = artistes[0]
    console.log(songs)
    return songs
}