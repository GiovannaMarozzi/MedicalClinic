package medical.clinic.api.paciente;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import medical.clinic.api.endereco.DadosEndereco;

public record DadosCadastroPaciente(@NotBlank
                                    String nome,

                                    @NotBlank
                                    String email,

                                    @NotBlank
                                    String telefone,

                                    @NotBlank
                                    String cpf,

                                    @NotNull
                                    DadosEndereco endereco) {
}
