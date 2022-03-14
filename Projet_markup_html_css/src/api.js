// api.js
export async function fetchArtiste() {
    const response = await fetch('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
    const artistes = await response.json()
   // const artist = artistes[0]
    console.log(artistes)
    return artistes
}

