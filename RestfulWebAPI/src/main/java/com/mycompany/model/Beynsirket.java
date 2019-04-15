package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynsirket")
public class Beynsirket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "tanim")
    private String tanim;

    @Column(name = "adres")
    private String adres;

    @Column(name = "ceptelefonu")
    private Long cepTelefonu;

    @Column(name = "elektronikposta")
    private String eposta;

    @Column(name = "cruser")
    private Long cruser;

    @Column(name = "crdate")
    private Date crdate;

    @Column(name = "upduser")
    private Long upduser;

    @Column(name = "upddate")
    private Date upddate;

    @Column(name = "deleteflag")
    private Integer deleteflag;

    @Column(name = "isactive")
    private Integer isactive;

    public Beynsirket() {
    }

    public Beynsirket(String tanim, String adres, Long cepTelefonu, String eposta, Long cruser, Date crdate, Long upduser, Date upddate, Integer deleteflag, Integer isactive) {
        this.tanim = tanim;
        this.adres = adres;
        this.cepTelefonu = cepTelefonu;
        this.eposta = eposta;
        this.cruser = cruser;
        this.crdate = crdate;
        this.upduser = upduser;
        this.upddate = upddate;
        this.deleteflag = deleteflag;
        this.isactive = isactive;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTanim() {
        return tanim;
    }

    public void setTanim(String tanim) {
        this.tanim = tanim;
    }

    public String getAdres() {
        return adres;
    }

    public void setAdres(String adres) {
        this.adres = adres;
    }

    public Long getCepTelefonu() {
        return cepTelefonu;
    }

    public void setCepTelefonu(Long cepTelefonu) {
        this.cepTelefonu = cepTelefonu;
    }

    public String getEposta() {
        return eposta;
    }

    public void setEposta(String eposta) {
        this.eposta = eposta;
    }

    public Long getCruser() {
        return cruser;
    }

    public void setCruser(Long cruser) {
        this.cruser = cruser;
    }

    public Date getCrdate() {
        return crdate;
    }

    public void setCrdate(Date crdate) {
        this.crdate = crdate;
    }

    public Long getUpduser() {
        return upduser;
    }

    public void setUpduser(Long upduser) {
        this.upduser = upduser;
    }

    public Date getUpddate() {
        return upddate;
    }

    public void setUpddate(Date upddate) {
        this.upddate = upddate;
    }

    public Integer getDeleteflag() {
        return deleteflag;
    }

    public void setDeleteflag(Integer deleteflag) {
        this.deleteflag = deleteflag;
    }

    public Integer getIsactive() {
        return isactive;
    }

    public void setIsactive(Integer isactive) {
        this.isactive = isactive;
    }
}
