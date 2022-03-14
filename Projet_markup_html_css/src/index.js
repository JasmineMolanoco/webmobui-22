import './css/index.css'
import { fetchArtiste} from './api.js'
import {fetchSong} from './section/fetchSong,js'


window.location.hash = "home";

// Affichage d'une section selon son id
function toggleSection(sectionId) {
  // Supprime/Ajoute la classe active sur la section
  document.querySelector('section.active')?.classList.remove('active');
  document.querySelector(sectionId)?.classList.add('active');
}

function toggleNav(sectionId) {
  // Supprime/Ajoute la classe active sur le lien
  document.querySelector('nav a.active')?.classList.remove('active');
  document.querySelector('nav a[href="' + sectionId + '"]')?.classList.add('active');
}

// Affichage d'une section
const displaySection = () => {
  // Comme nos hash et nos ids de section sont les mêmes, hash = sectionid
  const sectionId = window.location.hash;
  toggleNav(sectionId);

  const SpliteHash = window.location.hash.split('-')
  toggleSection(SpliteHash[0]);
  // si le premier élément est artiste, on est dans la gestion des artistes…
  switch (SpliteHash[0]) {
    case '#artists':
      // est-ce que le deuxième élément retourne quelque chose ? Et donc n’est pas undefined ? Oui?
      // Alors il y a un id et on affiche cet artiste
      if (SpliteHash[1]) {
 

        afficherChansonsArtiste(SpliteHash[1])
      }
      else {
        afficherArtistes()
      }
      break;
    case '#player':
      if (SpliteHash[1]) {
        afficherChansonsArtiste(SpliteHash[1])
      }
      else {
        afficherArtistes()
      }
      break;
    case '#list':
      if (SpliteHash[1]) {
        afficherChansonsArtiste(SpliteHash[1])
      }
      else {
        afficherArtistes()
      }
      break;
  }
}

// Listener hashchange pour l'history
// Lorsque l'utilisateur clique sur un lien avec un hash (ex. #player-section), cet événement est appelé. Cela
// nous informe que l'URL a changé et qu'il est maintenant possible d'en faire quelque chose.
// Nous passons comme callback la fonction définie plus haut qui va traiter cette info
window.addEventListener('hashchange', displaySection)

// Affichage au chargement
displaySection()

const artistList = document.querySelector('.artist-list')
const artistListItemTemplate = document.querySelector('#artist-list-item-template')
function afficherUnArtiste(artiste) {
  const newArtist = artistListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  newArtist.querySelector('a').href = '#artists-' + artiste.id
  newArtist.querySelector('img').src = artiste.image_url
  newArtist.querySelector('.artist-list-item-title').innerText = artiste.name
  artistList.append(newArtist)
}

async function afficherArtistes() {
  songList.replaceChildren()
  artistList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
  const artistes = await fetchArtiste();
  for (const artiste of artistes) {
    afficherUnArtiste(artiste)
  }
}

const songList = document.querySelector('.song-list')
const songListItemTemplate = document.querySelector('#song-list-item-template')
function afficherUneChansonArtiste(song) {
  const newSong = songListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
  newSong.querySelector('.song-list-item-title').innerText = song.title
  songList.append(newSong)
}

async function afficherChansonsArtiste(id) {
  artistList.replaceChildren()
  songList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
  const songs = await fetchSong(id);
  for (const song of songs) {
    afficherUneChansonArtiste(song)
  }
}