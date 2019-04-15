package com.mycompany.controller;

import com.mycompany.exception.BeynhasartespithesapNotFoundException;
import com.mycompany.model.Beynhasartespithesap;
import com.mycompany.repository.BeynhasartespithesapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynhasartespithesap")
public class BeynhasartespithesapController {
    @Autowired
    BeynhasartespithesapRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynhasartespithesap> findAll() {
        List<Beynhasartespithesap> list = new ArrayList<Beynhasartespithesap>();
        for (Beynhasartespithesap cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(0))
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynhasartespithesap findById(@RequestParam("id") long id) {
        Beynhasartespithesap result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynhasartespithesapNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynhasartespithesap> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynhasartespithesap> list = new ArrayList<Beynhasartespithesap>();
        for (Beynhasartespithesap cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynhasartespithesap> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynhasartespithesap> list = new ArrayList<Beynhasartespithesap>();
        for (Beynhasartespithesap cust : repository.findAll()) {
            if(cust.getIsactive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyhasartespit", method = RequestMethod.GET)
    public List<Beynhasartespithesap> findByHasarTespit(@RequestParam("id") long id) {
        List<Beynhasartespithesap> list = new ArrayList<Beynhasartespithesap>();
        for (Beynhasartespithesap cust : repository.findAll()) {
            if(cust.getBeynhasartespit_id().equals(id) && cust.getDeleteflag().equals(0)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addHesap(@RequestBody Beynhasartespithesap yeniHesap) {
        repository.save(yeniHesap);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynhasartespithesap rCust = null;
        for (Beynhasartespithesap c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynhasartespithesapNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynhasartespithesap updateHesap(@PathVariable("id") Long id, @RequestBody Beynhasartespithesap Hesap) {
        for (Beynhasartespithesap c : repository.findAll())
            if (c.getId().equals(id)) {
                c.setBeynhasartespit_id(Hesap.getBeynhasartespit_id());
                c.setBeynhesapgrubu_id(Hesap.getBeynhesapgrubu_id());
                c.setBeynhesapturu_id(Hesap.getBeynhesapturu_id());
                c.setAdedi(Hesap.getAdedi());
                c.setCarpan(Hesap.getCarpan());
                c.setTutari(Hesap.getTutari());
                c.setEkspertakdiri(Hesap.getEkspertakdiri());
                c.setIzahat(Hesap.getIzahat());
                c.setCruser(Hesap.getCruser());
                c.setCrdate(Hesap.getCrdate());
                c.setUpsuder(Hesap.getUpsuder());
                c.setUpddate(Hesap.getUpddate());
                c.setIsactive(Hesap.getIsactive());
                c.setDeleteflag(Hesap.getDeleteflag());
                repository.save(c);
                return c;
            }
        throw new BeynhasartespithesapNotFoundException();
    }
}
