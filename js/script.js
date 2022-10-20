// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let team=[
    {
    nome:"Wayne Barnett",
    ruolo:"Founder & CEO",
    image:"wayne-barnett-founder-ceo.jpg"
    },
    {
     nome:"Angela Caroll",
     ruolo:"Chief Editor",
    image:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
       image:"walter-gordon-office-manager.jpg" 
    },
    {
        nome:"Angela Lopez",
     ruolo:"Social Media Manager",
    image:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        image:"scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos ",
        ruolo:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg"
    }
]
console.log(team);
//Stampare su console le informazioni di nome, ruolo e la stringa della foto
//header contenuto 
let header=document.querySelector("header");
header.classList.add("container","text-center","text-dark","biege","p-3","mt-5","rounded-4")
//.container css e contenuti
let container=document.getElementById('container');
container.classList.add("d-flex","container","flex-wrap","biege","text-dark","mt-1" ,"py-4","rounded-4");
addPeople();
function addPeople(){
    container.innerHTML='';
for(let element of team){
    let card =document.createElement('div');
    card.classList.add("text-center","col-4","h-50" ,"text-dark","rounded-3","p-2");
    
    container.append(card);
        
        for(let key in element){
        console.log(`${key}: ${element[key]}`);
        card.innerHTML=
        `
        
        <img class="rounded-4 img-fluid" class="h-50" src="./img/${element.image}" alt="${element.image}">
        <h3>${element.nome}</h3>
        <p>${element.ruolo}</p>
        
        `
    }
}}
//pushare i valori di un form dentro al array team per creare un nuovo elemento del team
function creaPersona(){
    let nomeAgg=document.getElementById("nomeCognome").value
    let occupazione=document.getElementById("lavoro").value
    console.log(nomeAgg , occupazione);
    let elemento={
        nome:nomeAgg ,
        ruolo: occupazione,
         image: "sconosciuto.jpeg"
 }
 team.push(elemento);
 console.log(team)
 addPeople()
}
let btn=document.getElementById('avvia');
btn.addEventListener('click',creaPersona);
    

   
        
