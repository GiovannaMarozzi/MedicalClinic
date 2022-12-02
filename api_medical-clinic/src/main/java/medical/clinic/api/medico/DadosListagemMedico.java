package medical.clinic.api.medico;

public record DadosListagemMedico(Long id, String nome, String email, String crm, Especialidade especialidade) {
    public DadosListagemMedico(Medico medico){
        this(medico.getId(), medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getEspecialidade()); //Está sendo chamado o próprio constutor do método para que possa levar os parâmetros necessários
    }

}
