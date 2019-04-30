let arrow=document.getElementsByClassName("arrow");
let navMovies=document.getElementById("nav-movies");
arrow[0].addEventListener("click",()=>{navMovies.scrollTop-=50});
arrow[1].addEventListener("click",()=>{navMovies.scrollTop+=50});

movies=[{
    name:"Capitão America: O Primeiro Vingador",
    ImgBackground:'url("./img/CA1.jpg")',
    color:'-webkit-linear-gradient(#ffffff, #162ca2)',
    sinopse:'2ª Guerra Mundial. Steve Rogers (Chris Evans) é um jovem que aceitou ser voluntário em uma série de experiências que visam criar o supersoldado americano. Os militares conseguem transformá-lo em uma arma humana, mas logo percebem que o supersoldado é valioso demais para pôr em risco na luta contra os nazistas. Desta forma, Rogers é usado como uma celebridade do exército, marcando presença em paradas realizadas pela Europa no intuito de levantar a estima dos combatentes. Para tanto passa a usar uma vestimenta com as cores da bandeira dos Estados Unidos, azul, branca e vermelha. Só que um plano nazista faz com que Rogers entre em ação e assuma a alcunha de Capitão América, usando seus dons para combatê-los em plenas trincheiras da guerra.',
    trailer:'https://www.youtube.com/embed/JerVrbLldXw'

},{
    name:"Capitã Marvel",
    ImgBackground:'url("./img/CM.jpg")',
    color:'-webkit-linear-gradient(#ffffff, #162ca2)',
    sinopse:'Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército de elite. Inimiga declarada dos Skrull, ela acaba voltando ao seu planeta de origem para impedir uma invasão dos metaformos, e assim vai acabar descobrindo a verdade sobre si, com a ajuda do agente Nick Fury (Samuel L. Jackson) e da gata Goose.',
    trailer:'https://www.youtube.com/embed/Z1BCujX3pw8'
},{
    name:"Homem de Ferro",
    ImgBackground:'url("./img/ironmanbackground.jpg")',
    color:'-webkit-linear-gradient(#fbca03, #6a0c0b)',
    sinopse:'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor. Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro. A partir de então ele passa a usá-la para combater o crime, sob o alter-ego do Homem de Ferro.',
    trailer:'https://www.youtube.com/embed/8hYlB38asDY'
},{
    name:"Homem de Ferro 2",
    ImgBackground:'url("./img/Ironman2.jpg")',
    color:'-webkit-linear-gradient(#fbca03, #6a0c0b)',
    sinopse:'Após confessar ao mundo ser o Homem de Ferro, Tony Stark (Robert Downey Jr.) passa a ser alvo do governo dos Estados Unidos, que deseja que ele entregue seu poderoso traje. Com a negativa, o governo passa a desenvolver um novo traje com o maior rival de Stark, Justin Hammer (Sam Rockwell). Jim Rhodes (Don Cheadle), o braço direito de Tony, é colocado no centro deste conflito, o que faz com que assuma a identidade de Máquina de Combate. Paralelamente, Ivan Vanko (Mickey Rourke) cria o alter-ego de Whiplash para se vingar dos atos da família Stark no passado. Para combater Whiplash e a perseguição do governo, Stark conta com o apoio de sua nova assistente, Natasha Romanoff (Scarlett Johansson), e de Nick Fury (Samuel L. Jackson), o diretor da S.H.I.E.L.D.',
    trailer:'https://www.youtube.com/embed/oOzuBOefL8I'
},{
    name:"O Incrível Hulk",
    ImgBackground:'url("./img/HULK.jpg")',
    color:'-webkit-linear-gradient(#c9df8a, #36802d)',
    sinopse:'Vivendo escondido e longe de Betty Ross (Liv Tyler), a mulher que ama, o cientista Bruce Banner (Edward Norton) busca um meio de retirar a radiação gama que está em seu sangue. Ao mesmo tempo ele precisa fugir da perseguição do general Ross (William Hurt), seu grande inimigo, e da máquina militar que tenta capturá-lo, na intenção de explorar o poder que faz com que Banner se transforme no Hulk.',
    trailer:'https://www.youtube.com/embed/xbqNb2PFKKA'
},{
    name:"Thor",
    ImgBackground:'url("./img/thor.jpg")',
    color:'-webkit-linear-gradient(#66ccff, #6633ff)',
    sinopse:'Thor (Chris Hemsworth) estava prestes a receber o comando de Asgard das mãos de seu pai Odin (Anthony Hopkins) quando forças inimigas quebraram um acordo de paz. Disposto a se vingar do ocorrido, o jovem guerreiro desobedece as ordens do rei e quase dá início a uma nova guerra entre os reinos. Enfurecido com a atitude do filho e herdeiro, Odin retira seus poderes e o expulsa para a Terra. Lá, Thor acaba conhecendo a cientista Jane Foster (Natalie Portman) e precisa recuperar seu martelo, enquanto seu irmão Loki (Tom Hiddleston) elabora um plano para assumir o poder. Mas os guerreiros do Deus do Trovão fazem a mesma viagem para buscar o amigo e impedir que isso aconteça. Só que eles não vieram sozinhos e o inimigo está presente para uma batalha que está apenas começando.',
    trailer:'https://www.youtube.com/embed/JOddp-nlNvQ' 
},{
    name:"Vingadores",
    ImgBackground:'url("./img/avengers1.jpg")',
    color:'-webkit-linear-gradient(#fbfcfc, #a3b1bc)',
    sinopse:'Loki (Tom Hiddleston) retorna à Terra enviado pelos chitauri, uma raça alienígena que pretende dominar os humanos. Com a promessa de que será o soberano do planeta, ele rouba o cubo cósmico dentro de instalações da S.H.I.E.L.D. e, com isso, adquire grandes poderes. Loki os usa para controlar o dr. Erik Selvig (Stellan Skarsgard) e Clint Barton/Gavião Arqueiro (Jeremy Renner), que passam a trabalhar para ele. No intuito de contê-los, Nick Fury (Samuel L. Jackson) convoca um grupo de pessoas com grandes habilidades, mas que jamais haviam trabalhado juntas: Tony Stark/Homem de Ferro (Robert Downey Jr.), Steve Rogers/Capitão América (Chris Evans), Thor (Chris Hemsworth), Bruce Banner/Hulk (Mark Ruffalo) e Natasha Romanoff/Viúva Negra (Scarlett Johansson). Só que, apesar do grande perigo que a Terra corre, não é tão simples assim conter o ego e os interesses de cada um deles para que possam agir em grupo.',
    trailer:'https://www.youtube.com/embed/eOrNdBpGMv8' 
},{
    name:"Homem de Ferro 3",
    ImgBackground:'url("./img/ironman3.jpg")',
    color:'-webkit-linear-gradient(#fbca03, #6a0c0b)',
    sinopse :'Desde o ataque dos chitauri a Nova York, Tony Stark (Robert Downey Jr.) vem enfrentando dificuldades para dormir e, quando consegue, tem terríveis pesadelos. Ele teme não conseguir proteger sua namorada Pepper Potts (Gwyneth Paltrow) dos vários inimigos que passou a ter após vestir a armadura do Homem de Ferro. Um deles, o Mandarim (Ben Kingsley), decide atacá-lo com força total, destruindo sua mansão e colocando a vida de Pepper em risco. Para enfrentá-lo Stark precisará ressurgir do fundo do mar, para onde foi levado junto com os destroços da mansão, e superar seu maior medo: o de fracassar.',
    trailer:'https://www.youtube.com/embed/Ke1Y3P9D0Bc'
},{
    name:"Thor: O Mundo Sombrio",
    ImgBackground:'url("./img/thor2.jpg")',
    color:'-webkit-linear-gradient(#66ccff, #6633ff)',
    sinopse:'Enquanto Thor (Chris Hemsworth) liderava as últimas batalhas para conquistar a paz entre os Nove Reinos, o maldito elfo negro Malekith (Christopher Eccleston) acordava de um longo sono, sedento de vingança e louco para levar todos para a escuridão eterna. Alertado do perigo por Odin (Anthony Hopkins), o herói precisa contar com a ajuda dos companheiros Volstagg (Ray Stevenson), Sif (Jaimie Alexander), entre outros, e até de seu irmão, o traiçoeiro Loki (Tom Hiddleston), em um plano audacioso para salvar o universo do grande mal. Mas os caminhos de Thor e da amada Jane Foster (Natalie Portman) se cruzam novamente e, dessa vez, a vida dela está realmente em perigo.',
    trailer:'https://www.youtube.com/embed/npvJ9FTgZbM' 
},{
    name:"Capitão América: O Soldado Invernal",
    ImgBackground:'url("./img/CA2.jpg")',
    color:'-webkit-linear-gradient(#ffffff, #162ca2)',
    sinopse:'Dois anos após os acontecimentos em Nova York (Os Vingadores - The Avengers), Steve Rogers (Chris Evans) continua seu dedicado trabalho com a agência S.H.I.E.L.D. e também segue tentando se acostumar com o fato de que foi descongelado e acordou décadas depois de seu tempo. Em parceria com Natasha Romanoff (Scarlett Johansson), também conhecida como Viúva Negra, ele é obrigado a enfrentar um poderoso e misterioso inimigo chamado Soldado Invernal, que visita Washington e abala o dia a dia da S.H.I.E.L.D., ainda liderada por Nick Fury (Samuel L. Jackson).',
    trailer:'https://www.youtube.com/embed/7SlILk2WMTI'
},{
    name:"Guardiões da Galáxia",
    ImgBackground:'url("./img/guardioes.jpg")',
    color:'-webkit-linear-gradient(#fbfcfc, #a3b1bc)',
    sinopse:'Peter Quill (Chris Pratt) foi abduzido da Terra quando ainda era criança. Adulto, fez carreira como saqueador e ganhou o nome de Senhor das Estrelas. Quando rouba uma esfera, na qual o poderoso vilão Ronan, da raça kree, está interessado, passa a ser procurado por vários caçadores de recompensas. Para escapar do perigo, Quill une forças com quatro personagens fora do sistema: Groot, uma árvore humanóide (Vin Diesel), a sombria e perigosa Gamora (Zoe Saldana), o guaxinim rápido no gatilho Rocket Racoon (Bradley Cooper) e o vingativo Drax, o Destruidor (Dave Bautista). Mas o Senhor das Estrelas descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, e logo o grupo deverá proteger o objeto para salvar o futuro da galáxia.',
    trailer:'https://www.youtube.com/embed/d96cjJhvlMA'
},{
    name:"Guardiões da Galáxia Vol.2",
    ImgBackground:'url("./img/guardioes2.jpg")',
    color:'-webkit-linear-gradient(#fbfcfc, #a3b1bc)',
    sinopse:'Agora já conhecidos como os Guardiões da Galáxia, os guerreiros viajam ao longo do cosmos e lutam para manter sua nova família unida. Enquanto isso tentam desvendar os mistérios da verdadeira paternidade de Peter Quill (Chris Pratt).',
    trailer:'https://www.youtube.com/embed/dW1BIid8Osg'
},{
    name:"Vingadores:Era de Ultron",
    ImgBackground:'url("./img/avengers2.jpg")',
    color:'-webkit-linear-gradient(#fbfcfc, #a3b1bc)',
    sinopse:'Tentanto proteger o planeta de ameaças como as vistas no primeiro Os Vingadores, Tony Stark busca construir um sistema de inteligência artifical que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron (voz de James Spader). Capitão América (Chris Evans), Homem de Ferro (Robert Downey Jr.), Thor (Chris Hemsworth), Hulk (Mark Ruffalo), Viúva Negra (Scarlett Johansson) e Gavião Arqueiro (Jeremy Renner) terão que se unir para mais uma vez salvar o dia.',
    trailer:'https://www.youtube.com/embed/tmeOjFno6Do'
},{
    name:"Homem-Formiga",
    ImgBackground:'url("./img/antman.jpg")',
    color:'-webkit-linear-gradient(#ff0000, #800000)',
    sinopse :'Dr. Hank Pym (Michael Douglas) é o inventor da fórmula/traje que permite o encolhimento. Anos depois da descoberta, precisa impedir que seu ex-pupilo Darren Cross (Corey Stoll) consiga replicar o feito e vender a tecnologia para HYDRA. Dr. Pym escolhe o trambiqueiro Scott Lang (Paul Rudd) à usar o traje do Homem-Formiga. Lang, que acabou de sair da prisão e está com dificuldade de achar um trabalho honesto, aceita.',
    trailer:'https://www.youtube.com/embed/pWdKf3MneyI'
},{
    name:"Capitão America:Guerra Civil",
    ImgBackground:'url("./img/CA3.jpg")',
    color:'-webkit-linear-gradient(#ffffff, #162ca2)',
    sinopse:'Steve Rogers (Chris Evans) é o atual líder dos Vingadores, super-grupo de heróis formado por Viúva Negra (Scarlett Johansson), Feiticeira Escarlate (Elizabeth Olsen), Visão (Paul Bettany), Falcão (Anthony Mackie) e Máquina de Combate (Don Cheadle). O ataque de Ultron fez com que os políticos buscassem algum meio de controlar os super-heróis, já que seus atos afetam toda a humanidade. Tal decisão coloca o Capitão América em rota de colisão com Tony Stark (Robert Downey Jr.), o Homem de Ferro.',
    trailer:'https://www.youtube.com/embed/dKrVegVI0Us'
},{
    name:"Homem-Aranha: De Volta ao Lar",
    ImgBackground:'url("./img/spiderman.jpg")',
    color:'-webkit-linear-gradient(#ce0000, #ce0000)',
    sinopse:'Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
    trailer:'https://www.youtube.com/embed/39udgGPyYMg'
},{
    name:"Doutor Estranho",
    ImgBackground:'url("./img/doctorstrange.jpg")',
    color:'-webkit-linear-gradient(#008cd8, #5d6a95)',
    sinopse:'Stephen Strange (Benedict Cumberbatch) leva uma vida bem sucedida como neurocirurgião. Sua vida muda completamente quando sofre um acidente de carro e fica com as mãos debilitadas. Devido a falhas da medicina tradicional, ele parte para um lugar inesperado em busca de cura e esperança, um misterioso enclave chamado Kamar-Taj, localizado em Katmandu. Lá descobre que o local não é apenas um centro medicinal, mas também a linha de frente contra forças malignas místicas que desejam destruir nossa realidade. Ele passa a treinar e adquire poderes mágicos, mas precisa decidir se vai voltar para sua vida comum ou defender o mundo.',
    trailer:'https://www.youtube.com/embed/HSzx-zryEgM'
},{
    name:"Pantera Negra",
    ImgBackground:'url("./img/BlackPanther.jpg")',
    color:'-webkit-linear-gradient(#c4a8ff, #1a0554)',
    sinopse:'Após a morte do rei T´Chaka (John Kani), o príncipe T´Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. T´Challa logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong´o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.',
    trailer:'https://www.youtube.com/embed/xjDjIWPwcPU' 
},{
    name:"Thor:Ragnarok",
    ImgBackground:'url("./img/thor3.jpg")',
    color:'-webkit-linear-gradient(#66ccff, #6633ff)',
    sinopse:'Thor (Chris Hemsworth) está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela (Cate Blanchett).',
    trailer:'https://www.youtube.com/embed/ue80QwXMRHg' 
},{
    name:"Homem-Formiga e A Vespa",
    ImgBackground:'url("./img/antmanwasp.jpg")',
    color:'-webkit-linear-gradient(#720017, #d9ac2a)',
    sinopse:'Após ter ajudado o Capitão América na batalha contra o Homem de Ferro na Alemanha, Scott Lang (Paul Rudd) é condenado a dois anos de prisão domiciliar, por ter quebrado o Tratado de Sokovia. Diante desta situação, ele foi obrigado a se aposentar temporariamente do posto de super-herói. Restando apenas três dias para o término deste prazo, ele tem um estranho sonho com Janet Van Dyne (Michelle Pfeiffer), que desapareceu 30 anos atrás ao entrar no mundo quântico em um ato de heroísmo. Ao procurar o dr. Hank Pym (Michael Douglas) e sua filha Hope (Evangeline Lilly) em busca de explicações, Scott é rapidamente cooptado pela dupla para que possa ajudá-los em sua nova missão: construir um túnel quântico, com o objetivo de resgatar Janet de seu limbo.',
    trailer:'https://www.youtube.com/embed/UUkn-enk2RU' 
},{
    name:"Vingadores: Guerra Infinita",
    ImgBackground:'url("./img/avengers3.jpg")',
    color:'-webkit-linear-gradient(#fbfcfc, #a3b1bc)',
    sinopse:'Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes.',
    trailer:'https://www.youtube.com/embed/6ZfuNTqbHE8'
},{
    name:"Vingadores: Ultimato",
    ImgBackground:'url("./img/avengers4.jpg")',
    color:'-webkit-linear-gradient(#7b6fde, #453aa4)',
    sinopse:'Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.',
    trailer:'https://www.youtube.com/embed/TcMBFSGVi1c'
}];
let varcss=document.querySelector('html');

let selectMovie = document.getElementsByClassName('op-movie');
let currentAtive2=document.getElementsByClassName('active');
for(let i in selectMovie){
    selectMovie[i].addEventListener("click",function() {
        let currentAtive=document.getElementsByClassName('active');
        currentAtive[0].className=currentAtive[0].className.replace(" active","");
        this.className+=" active";
        if(window.innerWidth<=700){ // fechar o nav quando esta no celular
            closeNav();
        }
        for(let j in movies){
            if(this.innerHTML == movies[j].name){
                let trailerMovie=document.getElementsByClassName("myVideo")[0];
                trailerMovie.src=movies[j].trailer;
                let namemovie=document.getElementById("nameMovie");
                let sinopseMovie=document.getElementById("sinopseMovie"); 
                let newName= document.createTextNode(movies[j].name);
                let newSinopse=document.createTextNode(movies[j].sinopse);
                namemovie.replaceChild(newName,namemovie.childNodes[0]);
                sinopseMovie.replaceChild(newSinopse,sinopseMovie.childNodes[0]);
                varcss.style.setProperty('--colorh2',movies[j].color);
                varcss.style.setProperty('--backgroundimage',movies[j].ImgBackground);
            }
        }
    });
}

function OpenNav(){
    
    let navf = document.getElementById("nav");console.log(navf.className);
    if (navf.className != "resposiveNav"){
        navf.className ="resposiveNav";
        document.getElementById("myarrow").className = "pos-arrowResp";
        document.getElementById("myarrow2").className = "pos-arrowResp";
    }
    console.log(navf.className);
    //document.getElementById("nav").style.width = "100%";
    //document.getElementsByClassName("pos-arrow")[0].style.display = "block";
    //document.getElementsByClassName("pos-arrow")[1].style.display = "block";
    //document.getElementsByName("nav").style.width = "100%";
}

function closeNav(){
    let navf = document.getElementById("nav");
    console.log(navf.className);
    if (navf.className == "resposiveNav"){
        navf.className ="";
        document.getElementById("myarrow").className = "pos-arrow";
        document.getElementById("myarrow2").className = "pos-arrow";
    }
    console.log(navf.className);
    //document.getElementById("nav").style.width = "40%";
    //document.getElementsByClassName("pos-arrow")[0].style.display = "block";
    //document.getElementsByClassName("pos-arrow")[1].style.display = "block";
}
