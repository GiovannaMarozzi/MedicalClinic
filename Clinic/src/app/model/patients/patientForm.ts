import { EnderecoForm } from "../endereco/enderecoForm";

export class PatientForm{
   cpf!: string; 
   nome!: string;
   email!: string;
   telefone!: string;
   endereco!: Array<EnderecoForm>;
}