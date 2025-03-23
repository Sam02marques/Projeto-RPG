// PROJETINHO RPG 

// Criar uma classe Item que represente os itens do jogo.
// ● Criar uma classe Inventario para gerenciar os itens,
// armazenando-os em um array.
// ● Implementar métodos para:
// ○ Adicionar itens ao inventário.
// ○ Remover itens do inventário.
// ○ Listar todos os itens.
// ○ Buscar itens por tipo (ex.: “Arma”, “Poção”, “Defesa”).
// ○ Calcular o peso total do inventário.

class Item{ //CLASSE ITEM COM 4 ATRIBUTOS
    constructor(nome, descricao, tipo, peso){
        this.nome = String(nome);
        this.descricao = String(descricao);
        this.tipo = String(tipo);
        this.peso = Number(peso);
    }

    getDetalhes(){ //MÉTODO PARA MOSTRAR NO CONSOLE CASO CHAMADO, A DESCRIÇÃO DO ITEM ESCOLHIDO
        return `nome: ${this.nome}, descrição: ${this.descricao}, tipo: ${this.tipo}, peso: ${this.peso}`;
    }

}

class Inventario{ //CLASSE INVENTARIO COM ATRIBUTO ITEM EM ARRAY PARA FAZER UMA LISTA DOS ITENS
    constructor(){
        this.Item = [];
    }

    addItem(item){  //ADICIONA ITENS AO INVENTARIO
        this.Item.push(item)
        console.log(`${item.nome} adicionado!`);
    }
    
    removeItem(nomeItem){ //REMOVE ITENS DO INVENTARIO
        this.Item = this.Item.filter(item => item.nome !== nomeItem);{
            console.log(`${nomeItem} removido`)
        }
    }

    listItems(){ //LISTA TODOS OS ITENS DO INVENTARIO
        return this.Item;
    }


    findItemsByType(tipoItem){ //BUSCA OS ITENS POR TIPO
        const itens_achados = this.Item.filter(item => item.tipo === tipoItem)
        if(itens_achados.length !== 0){
            console.log(`Item(s) do tipo ${tipoItem} encontrado(s)!`)
            itens_achados.forEach(item => console.log(`----- ${item.nome}`))
        }else{
            console.log(`Item(s) do tipo ${tipoItem} não encontrados!`)
        }
    }

    totalWeight(){ // SOMA OS PESOS DOS ITENS DO INVENTÁRIO
        const peso = this.Item
        const soma = peso.reduce((ValorAcumulado, ValorAtual) => ValorAcumulado + ValorAtual.peso, 0);
        console.log(`soma do peso dos itens: ${soma} kg`);
    }
}



// criando inventarios
const equip = new Inventario();{
   equip.addItem(new Item("maçã podre", "alimento estragado", "normal", 1));
}

const equip2 = new Inventario();{
    equip.addItem(new Item("escudo de bronze", "escudo impenetrável", "raro", 10));
}

const equip3 = new Inventario();{
    equip.addItem(new Item("capa de seda", "capa lendária", "normal", 1));
}

// criando itens
const espada = new Item("Machado Lendário", "Um machado based e sigma", "demoníaco", 45);
const pocao_de_vida = new Item("Poção de vida", "Uma poção que recupera 50 de HP","místico", 2);
const vara_mistica = new Item("Vara Mística", "Uma vara de bruxo poderosa", "demoníaco", 4);


//MÉTODO PARA ADICIONAR ITENS AO INVENTARIO
equip.addItem(espada);
equip.addItem(pocao_de_vida);
equip.addItem(vara_mistica);

// MÉTODO PARA REMOVER ITENS DO INVENTARIO
// equip.removeItem("Poção de vida");

// MÉTODO PARA LISTAR ITENS DO INVENTARIO
console.log(equip.listItems());


// MÉTODO PARA MOSTRAR DETALHES DO ITEM ESPECÍFICO
console.log(vara_mistica.getDetalhes());


// MÉTODO PARA BUSCAR ITENS POR TIPO
console.log(equip.findItemsByType("demoníaco"));

// MÉTODO PARA SOMAR O PESO DOS ITENS
console.log(equip.totalWeight());

// exemplo de como usar o método reduce
// const num = [5,6,7,8,9,10];
// const mult = num.reduce((ValorAcumulado, ValorAtual) => ValorAcumulado * ValorAtual);
// console.log(mult);