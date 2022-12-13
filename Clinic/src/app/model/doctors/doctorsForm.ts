import { EnderecoForm } from "../endereco/enderecoForm";

export class DoctorsForm {
    nome!: string;
    email!: string;
    especialidade!: string;
    crm!: string;
    telefone!: string;
    endereco!: Array<EnderecoForm>;
}
