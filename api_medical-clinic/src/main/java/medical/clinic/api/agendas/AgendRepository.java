package medical.clinic.api.agendas;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AgendRepository  extends JpaRepository<Consultas, Long> {
}
