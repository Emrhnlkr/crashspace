package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beyneksper")
public class Beyneksper {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "adi")
    private String firstName;

    @Column(name = "soyadi")
    private String lastName;

    @Column(name = "beynsirket_id")
    private Long beynSirketId;

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

    public Beyneksper() {
    }

    public Beyneksper(String firstName, String lastName, Long beynSirketId, Long crUser, Date crDate, Long updUser, Date updDate, Integer deleteFlag, Integer isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.beynSirketId = beynSirketId;
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

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Long getBeynSirketId() {
        return beynSirketId;
    }

    public Long getCrUser() {
        return crUser;
    }

    public Date getCrDate() {
        return crDate;
    }

    public Long getUpdUser() {
        return updUser;
    }

    public Date getUpdDate() {
        return updDate;
    }

    public Integer getDeleteFlag() {
        return deleteFlag;
    }

    public Integer getIsActive() {
        return isActive;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setBeynSirketId(Long beynSirketId) {
        this.beynSirketId = beynSirketId;
    }

    public void setCrUser(Long crUser) {
        this.crUser = crUser;
    }

    public void setCrDate(Date crDate) {
        this.crDate = crDate;
    }

    public void setUpdUser(Long updUser) {
        this.updUser = updUser;
    }

    public void setUpdDate(Date updDate) {
        this.updDate = updDate;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public void setIsActive(Integer isActive) {
        this.isActive = isActive;
    }
}
