package medical.clinic.api.medico;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import medical.clinic.api.endereco.DadosEndereco;
import jakarta.validation.constraints.Pattern;

public record DadosCadastroMedico(@NotBlank
                                  String nome,
                                  @NotBlank
                                  @Email
                                  String email,

                                  @NotBlank
                                  String telefone,

                                  @NotBlank
                                  @Pattern(regexp = "\\d{4,6}")
                                  String crm,

                                  @NotNull
                                  Especialidade especialidade,

                                  @NotNull
                                  DadosEndereco endereco) {
}
