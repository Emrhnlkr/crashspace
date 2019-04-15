package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynhasartespithesap")
public class Beynhasartespithesap {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "beynhasartespit_id")
    private Long beynhasartespit_id;

    @Column(name = "beynhesapgrubu_id")
    private Long beynhesapgrubu_id;

    @Column(name = "beynhesapturu_id")
    private Long beynhesapturu_id;

    @Column(name = "adedi")
    private Long adedi;

    @Column(name = "carpan")
    private Float carpan;

    @Column(name = "ekspertakdiri")
    private Long ekspertakdiri;

    @Column(name = "tutari")
    private Long tutari;

    @Column(name = "izahat")
    private String izahat;

    @Column(name = "cruser")
    private Long cruser;

    @Column(name = "crdate")
    private Date crdate;

    @Column(name = "upduser")
    private Long upsuder;

    @Column(name = "upddate")
    private Date upddate;

    @Column(name = "deleteflag")
    private Integer deleteflag;

    @Column(name = "isactive")
    private Integer isactive;

    public Beynhasartespithesap() {
    }

    public Beynhasartespithesap(Long beynhasartespit_id, Long beynhesapgrubu_id, Long beynhesapturu_id, Long adedi, Float carpan, Long ekspertakdiri, Long tutari, String izahat, Long cruser, Date crdate, Long upsuder, Date upddate, Integer deleteflag, Integer isactive) {
        this.beynhasartespit_id = beynhasartespit_id;
        this.beynhesapgrubu_id = beynhesapgrubu_id;
        this.beynhesapturu_id = beynhesapturu_id;
        this.adedi = adedi;
        this.carpan = carpan;
        this.ekspertakdiri = ekspertakdiri;
        this.tutari = tutari;
        this.izahat = izahat;
        this.cruser = cruser;
        this.crdate = crdate;
        this.upsuder = upsuder;
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

    public Long getBeynhasartespit_id() {
        return beynhasartespit_id;
    }

    public void setBeynhasartespit_id(Long beynhasartespit_id) {
        this.beynhasartespit_id = beynhasartespit_id;
    }

    public Long getBeynhesapgrubu_id() {
        return beynhesapgrubu_id;
    }

    public void setBeynhesapgrubu_id(Long beynhesapgrubu_id) {
        this.beynhesapgrubu_id = beynhesapgrubu_id;
    }

    public Long getBeynhesapturu_id() {
        return beynhesapturu_id;
    }

    public void setBeynhesapturu_id(Long beynhesapturu_id) {
        this.beynhesapturu_id = beynhesapturu_id;
    }

    public Long getAdedi() {
        return adedi;
    }

    public void setAdedi(Long adedi) {
        this.adedi = adedi;
    }

    public Float getCarpan() {
        return carpan;
    }

    public void setCarpan(Float carpan) {
        this.carpan = carpan;
    }

    public Long getTutari() {
        return tutari;
    }

    public void setTutari(Long tutari) {
        this.tutari = tutari;
    }

    public String getIzahat() {
        return izahat;
    }

    public void setIzahat(String izahat) {
        this.izahat = izahat;
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

    public Long getUpsuder() {
        return upsuder;
    }

    public void setUpsuder(Long upsuder) {
        this.upsuder = upsuder;
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

    public Long getEkspertakdiri() {
        return ekspertakdiri;
    }

    public void setEkspertakdiri(Long ekspertakdiri) {
        this.ekspertakdiri = ekspertakdiri;
    }
}
