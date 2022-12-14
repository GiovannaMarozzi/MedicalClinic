package medical.clinic.api.paciente;

import jakarta.validation.constraints.NotNull;
import medical.clinic.api.endereco.DadosEndereco;

public record DadosAtualizacaoPaciente(@NotNull
                                       Long cpf,
                                       String nome,
                                       String telefone,
                                       DadosEndereco endereco) {
}
