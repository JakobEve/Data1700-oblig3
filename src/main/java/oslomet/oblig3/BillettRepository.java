package oslomet.oblig3;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BillettRepository extends JpaRepository<Billett, Long> {
    List<Billett> findAllByOrderByEtternavnAsc();
}
