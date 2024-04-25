package oslomet.oblig3;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Billett implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String filmer;
    private int antallBilletter;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;

    public Billett() {
    }

    public Billett(String filmer, int antallBilletter, String fornavn, String etternavn, String telefonnr, String epost) {
        this.filmer = filmer;
        this.antallBilletter = antallBilletter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilmer() {
        return filmer;
    }

    public void setFilmer(String filmer) {
        this.filmer = filmer;
    }

    public int getAntallBilletter() {
        return antallBilletter;
    }

    public void setAntallBilletter(int antallBilletter) {
        this.antallBilletter = antallBilletter;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
