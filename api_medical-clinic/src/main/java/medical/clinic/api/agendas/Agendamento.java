package medical.clinic.api.agendas;

import jakarta.validation.constraints.NotBlank;

public record Agendamento(@NotBlank
                          String nome,
                          @NotBlank
                          String cpf,
                          @NotBlank
                          String doutor,
                          String convenio,
                          @NotBlank
                          String especialidade,
                          @NotBlank
                          String data,
                          @NotBlank
                          String hora) {}
