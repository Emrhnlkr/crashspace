package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynhesapturu")
public class Beynhesapturu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "beynhesapgrubu_id")
    private Long beynhesapgrubu_id;

    @Column(name = "tanim")
    private String tanim;

    @Column(name = "carpan")
    private Float carpan;

    @Column(name = "ekspertakdirivarmi")
    private String ekspertakdirivarmi;

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

    public Beynhesapturu(Long beynhesapgrubu_id, String tanim, Float carpan, String ekspertakdirivarmi, Long cruser, Date crdate, Long upduser, Date upddate, Integer deleteflag, Integer isactive) {
        this.beynhesapgrubu_id = beynhesapgrubu_id;
        this.tanim = tanim;
        this.carpan = carpan;
        this.ekspertakdirivarmi = ekspertakdirivarmi;
        this.cruser = cruser;
        this.crdate = crdate;
        this.upduser = upduser;
        this.upddate = upddate;
        this.deleteflag = deleteflag;
        this.isactive = isactive;
    }

    public Beynhesapturu() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBeynhesapgrubu_id() {
        return beynhesapgrubu_id;
    }

    public void setBeynhesapgrubu_id(Long beynhesapgrubu_id) {
        this.beynhesapgrubu_id = beynhesapgrubu_id;
    }

    public String getTanim() {
        return tanim;
    }

    public void setTanim(String tanim) {
        this.tanim = tanim;
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

    public Float getCarpan() {
        return carpan;
    }

    public void setCarpan(Float carpan) {
        this.carpan = carpan;
    }

    public String getEkspertakdirivarmi() {
        return ekspertakdirivarmi;
    }

    public void setEkspertakdirivarmi(String ekspertakdirivarmi) {
        this.ekspertakdirivarmi = ekspertakdirivarmi;
    }
}