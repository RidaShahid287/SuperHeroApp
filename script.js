
const SUPERHERO_TOKEN = 591225932664011
const imageHero = document.getElementById('imageHero')
const searchbtn = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
const btn = document.getElementById('btn')
const BaseURL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const getRandomSuperHero = (id, name ) => {
    fetch (`${BaseURL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json
        getStatsHtml(superHero)
    })
 }

const statToEmoji = {
        intelligence: '🧠',
        strength: '💪',
        speed: '⚡',
        durability: '🏋️‍♂️',
        power: '📊',
        combat: '⚔️',
      }
      
const getStatsHtml = (character) =>{
    const name = `<h2>${character.name}</h2>`
    const img =  `<img src = "${character.image.url}" height = 300px width = 300px />`
 const stats = Object.keys(character.powerstats).map(stat => {
   return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p> `
 }).join(' ')
 imageHero.innerHTML = `${name} ${img} ${stats}`
}

const getSearchSuperHero = (name) => {
   // console.log(searchInput.value)
    fetch (`${BaseURL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        getStatsHtml(hero)
    /*     console.log(hero)
        imageHero.innerHTML = `<img src = "${hero.image.url}" height = 300px width = 300px />` */
    })
}

const randomHero = () => {
    const numberOfHeros = 731
    return Math.floor(Math.random() * numberOfHeros) + 1

}

btn.onclick = () => getRandomSuperHero (randomHero())   
searchbtn.onclick = () => getSearchSuperHero(searchInput.value)                                                                                                 