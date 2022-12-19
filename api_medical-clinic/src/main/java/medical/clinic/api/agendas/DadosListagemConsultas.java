package medical.clinic.api.agendas;

public record DadosListagemConsultas(String nome, String cpf, String especialidade, String doutor, String convenio, String data, String hora) {
    public DadosListagemConsultas(Consultas consultas){
        this(consultas.getNome(),
                consultas.getCpf(),
                consultas.getEspecialidade(),
                consultas.getDoutor(),
                consultas.getConvenio(),
                consultas.getData(),
                consultas.getHora());
    }
}
