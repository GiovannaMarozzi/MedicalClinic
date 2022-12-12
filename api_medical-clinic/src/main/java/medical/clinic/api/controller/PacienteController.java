package medical.clinic.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import medical.clinic.api.medico.DadosListagemMedicoById;
import medical.clinic.api.paciente.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

import static java.util.Arrays.stream;

@RestController
@RequestMapping("paciente")
public class PacienteController {

    @Autowired
    private PacienteRepository repository;

    @Autowired
    private PacienteRepositoryById repositoryById;

    @PostMapping
    @Transactional
    public void cadPaciente(@RequestBody @Valid DadosCadastroPaciente dados){
        repository.save(new Paciente(dados));
    }

    @GetMapping
    public List<DadosListagemPaciente> listPacientes (){
        return repository.findAll().stream().map(DadosListagemPaciente::new).toList();
    }

    @GetMapping("cpf={cpf}")
    public List<DadosListagemPacienteById> listPacientesById(@PathVariable Long cpf){
        return repositoryById.findAllById(Collections.singleton(cpf)).stream().map(DadosListagemPacienteById::new).toList();
    }
    @PutMapping
    @Transactional
    public void atualizarPacientes(@RequestBody @Valid DadosAtualizacaoPaciente dados){
        var paciente = repositoryById.getReferenceById(dados.cpf());
        paciente.atualizarInformacoes(dados);
    }

    @DeleteMapping("/id={id}")
    @Transactional
    public void excluirPaciente(@PathVariable Long id){
        repository.deleteById(id);
    }


}
