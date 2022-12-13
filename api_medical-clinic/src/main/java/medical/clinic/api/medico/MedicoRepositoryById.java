package medical.clinic.api.medico;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepositoryById extends JpaRepository<MedicoByid, Long> {
}
