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
for(let element of team){
    for(let key in element){
        console.log(`${key}: ${element[key]}`);
    }
}
//   MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe