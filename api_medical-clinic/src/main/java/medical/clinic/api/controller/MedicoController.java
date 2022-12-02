package medical.clinic.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import medical.clinic.api.medico.DadosCadastroMedico;
import medical.clinic.api.medico.Medico;
import medical.clinic.api.medico.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("medico")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @PostMapping
    @Transactional
    public void cadMedico(@RequestBody @Valid DadosCadastroMedico dados){
        repository.save(new Medico(dados));
    }
}
