package medical.clinic.api.agendas;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "consultas")
@Entity(name = "Consultas")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")

public class Consultas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cpf;
    private String doutor;
    private String especialidade;
    private String convenio;
    private String data;
    private String hora;

    public Consultas(Agendamento agendamento){
        this.nome = agendamento.nome();
        this.cpf = agendamento.cpf();
        this.doutor = agendamento.doutor();
        this.especialidade = agendamento.especialidade();
        this.convenio = agendamento.convenio();
        this.data = agendamento.data();
        this.hora = agendamento.hora();
    }
}
