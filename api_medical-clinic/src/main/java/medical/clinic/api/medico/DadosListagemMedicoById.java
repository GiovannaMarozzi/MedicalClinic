package medical.clinic.api.medico;

import medical.clinic.api.endereco.Endereco;

public record DadosListagemMedicoById(String nome, String email, String crm, Especialidade especialidade, Endereco endereco) {
    public DadosListagemMedicoById(MedicoByid medico){
        this(medico.getNome(), medico.getEmail(), String.valueOf(medico.getCrm()), medico.getEspecialidade(), medico.getEndereco());
    }
}
