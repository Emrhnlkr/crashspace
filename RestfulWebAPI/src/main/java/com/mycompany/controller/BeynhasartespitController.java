package com.mycompany.controller;

import com.mycompany.exception.BeynhasartespitNotFoundException;
import com.mycompany.model.Beynhasartespit;;
import com.mycompany.repository.BeynhasartespitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynhasartespit")
public class BeynhasartespitController {
    @Autowired
    BeynhasartespitRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynhasartespit> findAll() {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynhasartespit findById(@RequestParam("id") long id) {
        Beynhasartespit result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynhasartespitNotFoundException();
        }
    }

    @RequestMapping(value = "/findbyeksperid/{flag}", method = RequestMethod.GET)
    public List<Beynhasartespit> findByEksperId(@PathVariable("flag") Long flag) {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            if(cust.getEynEksperId().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynhasartespit> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynhasartespit> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            if(cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addTespit(@RequestBody Beynhasartespit yeniTespit) {
        repository.save(yeniTespit);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynhasartespit rCust = null;
        for (Beynhasartespit c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynhasartespitNotFoundException();
        }
}
    @RequestMapping(value = "/findbekleyentespitler", method = RequestMethod.GET)
    public List<Beynhasartespit> findByBekleyenTespitler() {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            if(cust.getRaporYili() == null) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findtamamlanmistespitler", method = RequestMethod.GET)
    public List<Beynhasartespit> findByTamamlanmisTespitler() {
        List<Beynhasartespit> list = new ArrayList<Beynhasartespit>();
        for (Beynhasartespit cust : repository.findAll()) {
            if(cust.getRaporYili() != null) {
                list.add(cust);
            }
        }
        return list;
    }


    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynhasartespit updateCustomer(@PathVariable("id") Long id, @RequestBody Beynhasartespit tespit) {
        for (Beynhasartespit c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setBeynSirketId(tespit.getBeynSirketId());
                c.setHasarTarihi(tespit.getHasarTarihi());
                c.setHasarYeri(tespit.getHasarYeri());
                c.setHasarNedeni(tespit.getHasarNedeni());
                c.setHasarKusurTespiti(tespit.getHasarKusurTespiti());
                c.setHasarKusurSekli(tespit.getHasarKusurSekli());
                c.setTramerNo(tespit.getTramerNo());
                c.setMagdurKusur(tespit.getMagdurKusur());
                c.setEynEksperId(tespit.getEynEksperId());
                c.setAracDegeri(tespit.getAracDegeri());
                c.setKazasonrasiAracBedeli(tespit.getKazasonrasiAracBedeli());
                c.setRaporYili(tespit.getRaporYili());
                c.setRaporNumarasi(tespit.getRaporNumarasi());
                c.setBeynSigortaSirketiId(tespit.getBeynSigortaSirketiId());
                c.setDosyaYili(tespit.getDosyaYili());
                c.setDosyaNumarasi(tespit.getDosyaNumarasi());
                c.setBeynAracMarkaTespit(tespit.getBeynAracMarkaTespit());
                c.setTespitAracTipi(tespit.getTespitAracTipi());
                c.setBeynAracKulanimSekliTespit(tespit.getBeynAracKulanimSekliTespit());
                c.setTespitPlaka(tespit.getTespitPlaka());
                c.setTespitMotorNo(tespit.getTespitMotorNo());
                c.setTespitSasiNo(tespit.getTespitSasiNo());
                c.setBeynAracRengiTespit(tespit.getBeynAracRengiTespit());
                c.setTespitKilometre(tespit.getTespitKilometre());
                c.setHasarKimlikNo(tespit.getHasarKimlikNo());
                c.setTespitAracSahibi(tespit.getTespitAracSahibi());
                c.setBeynAracMarkaHasar(tespit.getBeynAracMarkaHasar());
                c.setHasarAracTipi(tespit.getHasarAracTipi());
                c.setBeynAracKullanimSekliHasar(tespit.getBeynAracKullanimSekliHasar());
                c.setHasarPlaka(tespit.getHasarPlaka());
                c.setHasarMotorNo(tespit.getHasarMotorNo());
                c.setHasarSasiNo(tespit.getHasarSasiNo());
                c.setBeynAracRengiHasar(tespit.getBeynAracRengiHasar());
                c.setHasarKilometre(tespit.getHasarKilometre());
                c.setHasarKimlikNo(tespit.getHasarKimlikNo());
                c.setHassarAracSahibi(tespit.getHassarAracSahibi());
                c.setIzahat(tespit.getIzahat());
                c.setCrDate(tespit.getCrDate());
                c.setCrUser(tespit.getCrUser());
                c.setUpdDate(tespit.getUpdDate());
                c.setUpdUser(tespit.getUpdUser());
                c.setIsActive(tespit.getIsActive());
                c.setDeleteFlag(tespit.getDeleteFlag());
                c.setDegerKaybi(tespit.getDegerKaybi());
                repository.save(c);
                return c;
            }
        }
        throw new BeynhasartespitNotFoundException();
    }
}

