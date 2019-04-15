package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynusers")
public class Beynusers {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "parola")
    private String password;

    @Column(name = "elektronikposta")
    private String eposta;

    @Column(name = "beynsirket_id")
    private Long sirketid;

    @Column(name = "beyneksper_id")
    private Long eksperid;

    @Column(name = "turu")
    private String uyelikTuru;

    @Column(name = "cruser")
    private Long cruser;

    @Column(name = "crdate")
    private Date crdate;

    @Column(name = "upduser")
    private Long upduser;

    @Column(name = "upddate")
    private Date upddate;

    @Column(name = "deleteflag")
    private Integer deleteFlag;

    @Column(name = "isactive")
    private Integer isActive;

    public Beynusers() {
    }

    public Beynusers(String username, String password, String eposta, Long sirketid, Long eksperid, String uyelikTuru, Long cruser, Date crdate, Long upduser, Date upddate, Integer deleteFlag, Integer isActive) {
        this.username = username;
        this.password = password;
        this.eposta = eposta;
        this.sirketid = sirketid;
        this.eksperid = eksperid;
        this.uyelikTuru = uyelikTuru;
        this.cruser = cruser;
        this.crdate = crdate;
        this.upduser = upduser;
        this.upddate = upddate;
        this.deleteFlag = deleteFlag;
        this.isActive = isActive;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEposta() {
        return eposta;
    }

    public void setEposta(String eposta) {
        this.eposta = eposta;
    }

    public Long getSirketid() {
        return sirketid;
    }

    public void setSirketid(Long sirketid) {
        this.sirketid = sirketid;
    }

    public Long getEksperid() {
        return eksperid;
    }

    public void setEksperid(Long eksperid) {
        this.eksperid = eksperid;
    }

    public String getUyelikTuru() {
        return uyelikTuru;
    }

    public void setUyelikTuru(String uyelikTuru) {
        this.uyelikTuru = uyelikTuru;
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

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public Integer getIsActive() {
        return isActive;
    }

    public void setIsActive(Integer isActive) {
        this.isActive = isActive;
    }
}