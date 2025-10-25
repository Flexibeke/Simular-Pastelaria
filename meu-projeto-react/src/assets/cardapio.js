import pastelCarneImg from "./Pasteis/PastelCarne.jpeg";
import pastelFrangoImg from "./Pasteis/PastelFrango.webp";
import pastelFrangoCatupiriImg from "./Pasteis/PastelFrangoCatupiri.jpg";
import pastelNutellaImg from "./Pasteis/PastelNutella.jpeg";
import pastelPizzaImg from "./Pasteis/PastelPizza.jpeg";
import pastelPresuntoQueijoImg from "./Pasteis/PastelPresuntoQueijo.webp";

import aguaComGasImg from "./Bebidas/agua-com-gas.jpeg";
import aguaImg from "./Bebidas/agua-sem-gas.jpeg";
import cocaColaImg from "./Bebidas/coca-cola.jpeg";
import guaranaImg from "./Bebidas/guarana.jpeg";
import heinekenImg from "./Bebidas/heineken.jpeg";

import brownieImg from "./Acompanhamentos/brownie.jpeg";
import cocadaImg from "./Acompanhamentos/cocada-forno.jpeg";
import petitGateauImg from "./Acompanhamentos/petit-gateau.jpeg";

const pastelCarne = {
  nome: "Pastel de carne",
  descricao:
    "Massa crocante, recheio de carne bem temperada e suculenta, frita na hora. ",
  preco: "R$ 8,99",
  imagem: pastelCarneImg,
};

const pastelFrango = {
  nome: "Pastel de Frango",
  descricao:
    "Massa crocante, recheio frango bem temperada e suculenta, frita na hora. ",
  preco: "R$ 8,99",
  imagem: pastelFrangoImg,
};

const pastelFrangoCatupiri = {
  nome: "Pastel de Frango com Catupiri",
  descricao:
    "Massa crocante, recheio Frango e Catupiri bem temperada e suculenta, frita na hora. ",
  preco: "R$ 8,99",
  imagem: pastelFrangoCatupiriImg,
};
const pastelNutella = {
  nome: "Pastel de Nutella",
  descricao:
    "Massa crocante, recheio de nutella, sem muito doce e suculenta, frita na hora. ",
  preco: "R$ 11,99",
  imagem: pastelNutellaImg,
};
const pastelPizza = {
  nome: "Pastel de Pizza",
  descricao:
    "Massa crocante, recheio de presunto, queijo e oregáno bem temperada e suculenta, frita na hora. ",
  preco: "R$ 8,99",
  imagem: pastelPizzaImg,
};
const pastelPresuntoQueijo = {
  nome: "Pastel de presunto e queijo",
  descricao:
    " Massa crocante, recheio de presunto e queijo bem temperada e suculenta, frita na hora. ",
  preco: "R$ 8,99",
  imagem: pastelPresuntoQueijoImg,
};

const aguaComGas = {
  nome: "Água com gás",
  descricao: " Pronta para matar sua sede com um toque especial. ",
  preco: "R$ 2,99",
  imagem: aguaComGasImg,
};
const agua = {
  nome: "Água sem gás",
  descricao: " Pronta para matar sua sede com um sabor tradicional. ",
  preco: "R$ 2,99",
  imagem: aguaImg,
};
const cocaCola = {
  nome: "Coca-Cola 600ml",
  descricao: " Pronta para matar sua sede com aquele sabor irresistível. ",
  preco: "R$ 8,99",
  imagem: cocaColaImg,
};
const guarana = {
  nome: "Guárana 350ml",
  descricao: " Pronta para matar sua sede com um gosto que todo mundo ama. ",
  preco: "R$ 4,99",
  imagem: guaranaImg,
};
const heineken = {
  nome: "Heineken 1L",
  descricao: " Pronta para matar sua sede e tirar ela da sua cabeça. ",
  preco: "R$ 7,99",
  imagem: heinekenImg,
};

const brownie = {
  nome: "Brownie",
  descricao: " Doce, crocante e macio do jeito que você espera. ",
  preco: "R$ 5,99",
  imagem: brownieImg,
};
const cocada = {
  nome: "Cocada-forno",
  descricao: " Doce no ponto certo. ",
  preco: "R$ 3,99",
  imagem: cocadaImg,
};
const petitGateau = {
  nome: "Petit-gateal",
  descricao: " Doce, crocante e macio do jeito que vocẽ espera. ",
  preco: "R$ 7,99",
  imagem: petitGateauImg,
};

export const pasteis = [
  pastelCarne,
  pastelFrango,
  pastelFrangoCatupiri,
  pastelNutella,
  pastelPizza,
  pastelPresuntoQueijo,
];

export const acompanhamentos = [brownie, cocada, petitGateau];
export const bebidas = [aguaComGas, agua, cocaCola, guarana, heineken];
