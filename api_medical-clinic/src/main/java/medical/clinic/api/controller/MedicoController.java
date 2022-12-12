package medical.clinic.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import medical.clinic.api.medico.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
@RestController
@RequestMapping("medico")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;
    @Autowired
    private MedicoRepositoryById repositoryByid;

    @PostMapping
    @Transactional
    public void cadMedico(@RequestBody @Valid DadosCadastroMedico dados){
        repository.save(new Medico(dados));
    }

    @CrossOrigin(origins = "http://localhost:4200/formDoctor", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
    @GetMapping
    public List<DadosListagemMedico> listMedicos(){
        return repository.findAll().stream().map(DadosListagemMedico::new).toList();
    }

    @GetMapping("crm={crm}")
    public List<DadosListagemMedicoById> listMedicosById(@PathVariable Long crm){
        return repositoryByid.findAllById(Collections.singleton(crm)).stream().map(DadosListagemMedicoById::new).toList();
    }

//Caso futuramente precise colocar paginação

//    @GetMapping
//    public Page<DadosListagemMedico> listMedicos(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao){
//        return repository.findAllByAtivoTrue(paginacao).map(DadosListagemMedico::new);
//    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizacoesMedico dados){
        var medico = repositoryByid.getReferenceById(dados.crm()); //Irá procurar o médico pelo id que será passado pelo body
        medico.atualizarInformacoes(dados);
    }

    @DeleteMapping("/id={id}")
    @Transactional
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }
}
