package medical.clinic.api.paciente;

import medical.clinic.api.endereco.Endereco;

public record DadosListagemPacienteById(Long cpf, String nome, String email, Endereco endereco) {
    public DadosListagemPacienteById (PacienteById paciente){
        this(paciente.getCpf(), paciente.getNome(), paciente.getEmail(), paciente.getEndereco());
    }

}
