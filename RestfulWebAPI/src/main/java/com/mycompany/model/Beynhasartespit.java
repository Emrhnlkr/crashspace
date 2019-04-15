package com.mycompany.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "beynhasartespit")
public class Beynhasartespit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "beynsirket_id")
    private Long beynSirketId;

    @Column(name = "hasartarihi")
    private Date hasarTarihi;

    @Column(name = "hasaryeri")
    private String hasarYeri;

    @Column(name = "hasarnedeni")
    private String hasarNedeni;

    @Column(name = "hasarkusurtepiti")
    private String hasarKusurTespiti;

    @Column(name = "hasarkusursekli")
    private String hasarKusurSekli;

    @Column(name = "tramerno")
    private String tramerNo;

    @Column(name = "magdurkusur")
    private String magdurKusur;

    @Column(name = "eyneksper_id")
    private Long eynEksperId;

    @Column(name = "aracdegeri")
    private Long aracDegeri;

    @Column(name = "degerkaybi")
    private Long degerKaybi;

    @Column(name = "kazasonrasiaracbedeli")
    private Double kazasonrasiAracBedeli;

    @Column(name = "raporyili")
    private Long raporYili;

    @Column(name = "rapornumarasi")
    private Long raporNumarasi;

    @Column(name = "beynsigortasirketi_id")
    private Long beynSigortaSirketiId;

    @Column(name = "dosyayili")
    private Long dosyaYili;

    @Column(name = "dosyanumarasi")
    private Long dosyaNumarasi;

    @Column(name = "beynaracmarka_tespit")
    private Long beynAracMarkaTespit;

    @Column(name = "tespitaractipi")
    private String tespitAracTipi;

    @Column(name = "beynarackullanimsekli_tespit")
    private Long beynAracKulanimSekliTespit;

    @Column(name = "tespitplaka")
    private String tespitPlaka;

    @Column(name = "tespitmotorno")
    private String tespitMotorNo;

    @Column(name = "tespitsasino")
    private String tespitSasiNo;

    @Column(name = "beynaracrengi_tespit")
    private Long beynAracRengiTespit;

    @Column(name = "tespitkilometre")
    private Long tespitKilometre;

    @Column(name = "tespitkimlikno")
    private Long tespitKimlikNo;

    @Column(name = "tespitaracsahibi")
    private String tespitAracSahibi;

    @Column(name = "beynaracmarka_hasar")
    private Long beynAracMarkaHasar;

    @Column(name = "hasararactipi")
    private String hasarAracTipi;

    @Column(name = "beynarackullanimsekli_hasar")
    private Long beynAracKullanimSekliHasar;

    @Column(name = "hasarplaka")
    private String hasarPlaka;

    @Column(name = "hasarmotorno")
    private String hasarMotorNo;

    @Column(name = "hasarsasino")
    private String hasarSasiNo;

    @Column(name = "beynaracrengi_hasar")
    private Long beynAracRengiHasar;

    @Column(name = "hasarkilometre")
    private Long hasarKilometre;

    @Column(name = "hasarkimlikno")
    private Long hasarKimlikNo;

    @Column(name = "hasararacsahibi")
    private String hassarAracSahibi;

    @Column(name = "izahat")
    private String izahat;

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

    public Beynhasartespit() {
    }

    public Beynhasartespit(Long beynSirketId, Date hasarTarihi, String hasarYeri, String hasarNedeni, String hasarKusurTespiti, String hasarKusurSekli, String tramerNo, String magdurKusur, Long eynEksperId, Long aracDegeri, Long degerKaybi, Double kazasonrasiAracBedeli, Long raporYili, Long raporNumarasi, Long beynSigortaSirketiId, Long dosyaYili, Long dosyaNumarasi, Long beynAracMarkaTespit, String tespitAracTipi, Long beynAracKulanimSekliTespit, String tespitPlaka, String tespitMotorNo, String tespitSasiNo, Long beynAracRengiTespit, Long tespitKilometre, Long tespitKimlikNo, String tespitAracSahibi, Long beynAracMarkaHasar, String hasarAracTipi, Long beynAracKullanimSekliHasar, String hasarPlaka, String hasarMotorNo, String hasarSasiNo, Long beynAracRengiHasar, Long hasarKilometre, Long hasarKimlikNo, String hassarAracSahibi, String izahat, Long crUser, Date crDate, Long updUser, Date updDate, Integer deleteFlag, Integer isActive) {
        this.beynSirketId = beynSirketId;
        this.hasarTarihi = hasarTarihi;
        this.hasarYeri = hasarYeri;
        this.hasarNedeni = hasarNedeni;
        this.hasarKusurTespiti = hasarKusurTespiti;
        this.hasarKusurSekli = hasarKusurSekli;
        this.tramerNo = tramerNo;
        this.magdurKusur = magdurKusur;
        this.eynEksperId = eynEksperId;
        this.aracDegeri = aracDegeri;
        this.degerKaybi = degerKaybi;
        this.kazasonrasiAracBedeli = kazasonrasiAracBedeli;
        this.raporYili = raporYili;
        this.raporNumarasi = raporNumarasi;
        this.beynSigortaSirketiId = beynSigortaSirketiId;
        this.dosyaYili = dosyaYili;
        this.dosyaNumarasi = dosyaNumarasi;
        this.beynAracMarkaTespit = beynAracMarkaTespit;
        this.tespitAracTipi = tespitAracTipi;
        this.beynAracKulanimSekliTespit = beynAracKulanimSekliTespit;
        this.tespitPlaka = tespitPlaka;
        this.tespitMotorNo = tespitMotorNo;
        this.tespitSasiNo = tespitSasiNo;
        this.beynAracRengiTespit = beynAracRengiTespit;
        this.tespitKilometre = tespitKilometre;
        this.tespitKimlikNo = tespitKimlikNo;
        this.tespitAracSahibi = tespitAracSahibi;
        this.beynAracMarkaHasar = beynAracMarkaHasar;
        this.hasarAracTipi = hasarAracTipi;
        this.beynAracKullanimSekliHasar = beynAracKullanimSekliHasar;
        this.hasarPlaka = hasarPlaka;
        this.hasarMotorNo = hasarMotorNo;
        this.hasarSasiNo = hasarSasiNo;
        this.beynAracRengiHasar = beynAracRengiHasar;
        this.hasarKilometre = hasarKilometre;
        this.hasarKimlikNo = hasarKimlikNo;
        this.hassarAracSahibi = hassarAracSahibi;
        this.izahat = izahat;
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

    public Long getBeynSirketId() {
        return beynSirketId;
    }

    public void setBeynSirketId(Long beynSirketId) {
        this.beynSirketId = beynSirketId;
    }

    public Date getHasarTarihi() {
        return hasarTarihi;
    }

    public void setHasarTarihi(Date hasarTarihi) {
        this.hasarTarihi = hasarTarihi;
    }

    public String getHasarYeri() {
        return hasarYeri;
    }

    public void setHasarYeri(String hasarYeri) {
        this.hasarYeri = hasarYeri;
    }

    public String getHasarNedeni() {
        return hasarNedeni;
    }

    public void setHasarNedeni(String hasarNedeni) {
        this.hasarNedeni = hasarNedeni;
    }

    public String getHasarKusurTespiti() {
        return hasarKusurTespiti;
    }

    public void setHasarKusurTespiti(String hasarKusurTespiti) {
        this.hasarKusurTespiti = hasarKusurTespiti;
    }

    public String getHasarKusurSekli() {
        return hasarKusurSekli;
    }

    public void setHasarKusurSekli(String hasarKusurSekli) {
        this.hasarKusurSekli = hasarKusurSekli;
    }

    public String getTramerNo() {
        return tramerNo;
    }

    public void setTramerNo(String tramerNo) {
        this.tramerNo = tramerNo;
    }

    public String getMagdurKusur() {
        return magdurKusur;
    }

    public void setMagdurKusur(String magdurKusur) {
        this.magdurKusur = magdurKusur;
    }

    public Long getEynEksperId() {
        return eynEksperId;
    }

    public void setEynEksperId(Long eynEksperId) {
        this.eynEksperId = eynEksperId;
    }

    public Long getAracDegeri() {
        return aracDegeri;
    }

    public void setAracDegeri(Long aracDegeri) {
        this.aracDegeri = aracDegeri;
    }

    public Double getKazasonrasiAracBedeli() {
        return kazasonrasiAracBedeli;
    }

    public void setKazasonrasiAracBedeli(Double kazasonrasiAracBedeli) {
        this.kazasonrasiAracBedeli = kazasonrasiAracBedeli;
    }

    public Long getRaporYili() {
        return raporYili;
    }

    public void setRaporYili(Long raporYili) {
        this.raporYili = raporYili;
    }

    public Long getRaporNumarasi() {
        return raporNumarasi;
    }

    public void setRaporNumarasi(Long raporNumarasi) {
        this.raporNumarasi = raporNumarasi;
    }

    public Long getBeynSigortaSirketiId() {
        return beynSigortaSirketiId;
    }

    public void setBeynSigortaSirketiId(Long beynSigortaSirketiId) {
        this.beynSigortaSirketiId = beynSigortaSirketiId;
    }

    public Long getDosyaYili() {
        return dosyaYili;
    }

    public void setDosyaYili(Long dosyaYili) {
        this.dosyaYili = dosyaYili;
    }

    public Long getDosyaNumarasi() {
        return dosyaNumarasi;
    }

    public void setDosyaNumarasi(Long dosyaNumarasi) {
        this.dosyaNumarasi = dosyaNumarasi;
    }

    public Long getBeynAracMarkaTespit() {
        return beynAracMarkaTespit;
    }

    public void setBeynAracMarkaTespit(Long beynAracMarkaTespit) {
        this.beynAracMarkaTespit = beynAracMarkaTespit;
    }

    public String getTespitAracTipi() {
        return tespitAracTipi;
    }

    public void setTespitAracTipi(String tespitAracTipi) {
        this.tespitAracTipi = tespitAracTipi;
    }

    public Long getBeynAracKulanimSekliTespit() {
        return beynAracKulanimSekliTespit;
    }

    public void setBeynAracKulanimSekliTespit(Long beynAracKulanimSekliTespit) {
        this.beynAracKulanimSekliTespit = beynAracKulanimSekliTespit;
    }

    public String getTespitPlaka() {
        return tespitPlaka;
    }

    public void setTespitPlaka(String tespitPlaka) {
        this.tespitPlaka = tespitPlaka;
    }

    public String getTespitMotorNo() {
        return tespitMotorNo;
    }

    public void setTespitMotorNo(String tespitMotorNo) {
        this.tespitMotorNo = tespitMotorNo;
    }

    public String getTespitSasiNo() {
        return tespitSasiNo;
    }

    public void setTespitSasiNo(String tespitSasiNo) {
        this.tespitSasiNo = tespitSasiNo;
    }

    public Long getBeynAracRengiTespit() {
        return beynAracRengiTespit;
    }

    public void setBeynAracRengiTespit(Long beynAracRengiTespit) {
        this.beynAracRengiTespit = beynAracRengiTespit;
    }

    public Long getTespitKilometre() {
        return tespitKilometre;
    }

    public void setTespitKilometre(Long tespitKilometre) {
        this.tespitKilometre = tespitKilometre;
    }

    public Long getTespitKimlikNo() {
        return tespitKimlikNo;
    }

    public void setTespitKimlikNo(Long tespitKimlikNo) {
        this.tespitKimlikNo = tespitKimlikNo;
    }

    public String getTespitAracSahibi() {
        return tespitAracSahibi;
    }

    public void setTespitAracSahibi(String tespitAracSahibi) {
        this.tespitAracSahibi = tespitAracSahibi;
    }

    public Long getBeynAracMarkaHasar() {
        return beynAracMarkaHasar;
    }

    public void setBeynAracMarkaHasar(Long beynAracMarkaHasar) {
        this.beynAracMarkaHasar = beynAracMarkaHasar;
    }

    public String getHasarAracTipi() {
        return hasarAracTipi;
    }

    public void setHasarAracTipi(String hasarAracTipi) {
        this.hasarAracTipi = hasarAracTipi;
    }

    public Long getBeynAracKullanimSekliHasar() {
        return beynAracKullanimSekliHasar;
    }

    public void setBeynAracKullanimSekliHasar(Long beynAracKullanimSekliHasar) {
        this.beynAracKullanimSekliHasar = beynAracKullanimSekliHasar;
    }

    public String getHasarPlaka() {
        return hasarPlaka;
    }

    public void setHasarPlaka(String hasarPlaka) {
        this.hasarPlaka = hasarPlaka;
    }

    public String getHasarMotorNo() {
        return hasarMotorNo;
    }

    public void setHasarMotorNo(String hasarMotorNo) {
        this.hasarMotorNo = hasarMotorNo;
    }

    public String getHasarSasiNo() {
        return hasarSasiNo;
    }

    public void setHasarSasiNo(String hasarSasiNo) {
        this.hasarSasiNo = hasarSasiNo;
    }

    public Long getBeynAracRengiHasar() {
        return beynAracRengiHasar;
    }

    public void setBeynAracRengiHasar(Long beynAracRengiHasar) {
        this.beynAracRengiHasar = beynAracRengiHasar;
    }

    public Long getHasarKilometre() {
        return hasarKilometre;
    }

    public void setHasarKilometre(Long hasarKilometre) {
        this.hasarKilometre = hasarKilometre;
    }

    public Long getHasarKimlikNo() {
        return hasarKimlikNo;
    }

    public void setHasarKimlikNo(Long hasarKimlikNo) {
        this.hasarKimlikNo = hasarKimlikNo;
    }

    public String getHassarAracSahibi() {
        return hassarAracSahibi;
    }

    public void setHassarAracSahibi(String hassarAracSahibi) {
        this.hassarAracSahibi = hassarAracSahibi;
    }

    public String getIzahat() {
        return izahat;
    }

    public void setIzahat(String izahat) {
        this.izahat = izahat;
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

    public Long getDegerKaybi() {
        return degerKaybi;
    }

    public void setDegerKaybi(Long degerKaybi) {
        this.degerKaybi = degerKaybi;
    }
}
