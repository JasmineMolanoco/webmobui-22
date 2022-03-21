import JsonStorage from './lib/jsonStorage' // ou autre chemin que vous aurez choisi
import { getSongsForArtist, searchSongs } from '../api'
import { setSongList, playSong } from './player'



// Les tags dont nous avons besoin pour afficher les chansons
const songsSection = document.querySelector('#list-section')
const songsSectionTitle = songsSection.querySelector('list-item-title')
const songList = songsSection.querySelector('.list')
const songListItemTemplate = songsSection.querySelector('#list-item-template')

// Render une chanson dans la liste
function renderSong(song, songs) {
    const newSong = songListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    newSong.querySelector('.list-item-title').innerText = song.title
    newSong.querySelector('#fav-button').addEventListener('click', () => {
      playSong(song, songs)
      window.location.hash = '#player'
    })
    songList.append(newSong)
  }

// ajouter une chanson dans favoris
favoriteStorage.addItem(aSong)

// verifier si elle est dans les favoris
if (favoriteStorage.toArray().find((entry) => entry[1].id == idRecherché)) {
    console.log("C’est dedans!")
} else {
    console.log("ça n’y est pas…")
}

// Afficher la liste des favoris
favoriteStorage.forEach((valeur, id) => {
    console.log("l’id est :", id)
    console.log("le nom est :", valeur.name)
    console.log("les chansons:", valeur.songs)
    afficherPlaylist(valeur)
    })
