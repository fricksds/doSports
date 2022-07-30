export class User {
    id: number;
    name: string;
    email: string;
    typeUser: string;
    cnpj: string;
    cpf: string;
    genero: string;
    telefone: string;

    constructor(id: number, name: string, email: string, typeUser: string, cnpj: string, cpf: string, genero: string, telefone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.typeUser = typeUser;
        this.cnpj = cnpj;
        this.cpf = cpf;
        this.genero = genero;
        this.telefone = telefone;
    }
}