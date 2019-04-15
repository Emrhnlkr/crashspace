package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynaracrengi")
public class Beynaracrengi {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "tanim")
    private String tanim;

    @Column(name = "cruser")
    private Long crUser;

    @Column(name = "crdate")
    private Date crDate;

    @Column(name = "upduser")
    private Long updUser;

    @Column(name = "upddate")
    private Date updDate;

    @Column(name = "deleteflag")
    private Integer deleteFlag;

    @Column(name = "isactive")
    private Integer isActive;

    public Beynaracrengi() {
    }

    public Beynaracrengi(String tanim, Long crUser, Date crDate, Long updUser, Date updDate, Integer deleteFlag, Integer isActive) {
        this.tanim = tanim;
        this.crUser = crUser;
        this.crDate = crDate;
        this.updUser = updUser;
        this.updDate = updDate;
        this.deleteFlag = deleteFlag;
        this.isActive = isActive;
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

    public Long getCrUser() {
        return crUser;
    }

    public void setCrUser(Long crUser) {
        this.crUser = crUser;
    }

    public Date getCrDate() {
        return crDate;
    }

    public void setCrDate(Date crDate) {
        this.crDate = crDate;
    }

    public Long getUpdUser() {
        return updUser;
    }

    public void setUpdUser(Long updUser) {
        this.updUser = updUser;
    }

    public Date getUpdDate() {
        return updDate;
    }

    public void setUpdDate(Date updDate) {
        this.updDate = updDate;
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