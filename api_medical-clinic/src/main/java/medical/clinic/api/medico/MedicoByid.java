package medical.clinic.api.medico;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import medical.clinic.api.endereco.Endereco;

@Table(name="medicos")
@Entity(name="MedicoById")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "crm")
public class MedicoByid {

    private Long id;
    private String nome;
    private String email;
    private String telefone;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long crm;

    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;

    @Embedded
    private Endereco endereco;

    private Boolean ativo;

    public void atualizarInformacoes(DadosAtualizacoesMedico dados) {
            if(dados.nome() != null){
                this.nome = dados.nome();
            }
            if(dados.telefone() != null){
                this.telefone = dados.telefone();
            }
            if(dados.endereco() != null){
                this.endereco.atualizarInformacoes(dados.endereco());
            }

        }


//    public MedicoByid(DadosCadastroMedico dados) {
//        this.nome = dados.nome();
//        this.email = dados.email();
//        this.telefone = dados.telefone();
//        this.crm = Long.valueOf(dados.crm());
//        this.especialidade = dados.especialidade();
//        this.endereco = new Endereco(dados.endereco());
//        this.ativo = true;
//
//    }
}
