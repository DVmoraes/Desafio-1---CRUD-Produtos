class Produto {
    constructor(obj){
        obj = obj || {}// tratamento para evitar undefined .
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor;
        this.quantidadeEstoque = obj.quantidadeEstoque;
        this.observacao = obj.observacao;
        this.dataCadastro = obj.dataCadastro;
    }

    validar(){
        // retorna (!this.nome || !this.quantidadeEstoque) ? false  : true;  
        return !!(this.nome && this.quantidadeEstoque);  
    }
}