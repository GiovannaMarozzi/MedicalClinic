package medical.clinic.api.paciente;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepositoryById  extends JpaRepository<PacienteById, Long> {
}
