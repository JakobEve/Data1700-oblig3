package oslomet.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class Controller {

    @Autowired
    private BillettRepository billettRepository;

    @PostMapping("/bestillinger")
    public void lagreKunde(@Valid Billett ticket){
        billettRepository.save(ticket);
    }

    @GetMapping("/bestillinger")
    public List<Billett> hentAlle(){
        return billettRepository.findAllByOrderByEtternavnAsc();
    }

    @DeleteMapping("/bestillinger")
    public void slettAlle(){
        billettRepository.deleteAll();
    }
}
