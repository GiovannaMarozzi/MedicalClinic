package medical.clinic.api.medico;

import jakarta.validation.constraints.NotNull;
import medical.clinic.api.endereco.DadosEndereco;

public record DadosAtualizacoesMedico(@NotNull
                                      Long crm,
                                      String nome,
                                      String telefone,
                                      DadosEndereco endereco) {
}
