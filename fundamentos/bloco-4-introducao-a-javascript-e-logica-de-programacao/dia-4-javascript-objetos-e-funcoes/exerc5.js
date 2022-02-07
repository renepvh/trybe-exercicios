
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: "Sim",
};


let info1 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O Último MacPatinhas',
  recorrente: "Sim"
};

// console.log(info.personagem + " e " + info2.personagem)

for (let key in info, info1) {
  
  if (key == "recorrente" && info[key] == "Sim" && info1[key] == "Sim") {
    console.log("Ambos são recorrentes")
  }
  else {
  console.log(info[key] + " e " + info1[key])
  }
}



// let info = [
//   {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "Sim",
//   },
//   {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O Último MacPatinhas',
//     recorrente: "Sim"
//   }
// ];


// // console.log(info[0].personagem + " e " + info[1].personagem)

// for (let key in info) {
//   for (let index = 0; index >info.length; index +=1) {
//     console.log(index[info])
//   }
// }