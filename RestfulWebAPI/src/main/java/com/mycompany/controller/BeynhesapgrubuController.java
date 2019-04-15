package com.mycompany.controller;

import com.mycompany.exception.BeynhesapgrubuNotFoundException;
import com.mycompany.model.Beynhesapgrubu;
import com.mycompany.repository.BeynhesapgrubuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynhesapgrubu")
public class BeynhesapgrubuController {
    @Autowired
    BeynhesapgrubuRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynhesapgrubu> findAll() {
        List<Beynhesapgrubu> list = new ArrayList<Beynhesapgrubu>();
        for (Beynhesapgrubu cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynhesapgrubu findById(@RequestParam("id") long id) {
        Beynhesapgrubu result = repository.findOne(id);
        if (result != null) {
            return result;

        } else {
            throw new BeynhesapgrubuNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynhesapgrubu> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynhesapgrubu> list = new ArrayList<Beynhesapgrubu>();
        for (Beynhesapgrubu cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynhesapgrubu> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynhesapgrubu> list = new ArrayList<Beynhesapgrubu>();
        for (Beynhesapgrubu cust : repository.findAll()) {
            if(cust.getIsactive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addHesap(@RequestBody Beynhesapgrubu yeniHesap) {
        repository.save(yeniHesap);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynhesapgrubu rCust = null;
        for (Beynhesapgrubu c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynhesapgrubuNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynhesapgrubu updateCustomer(@PathVariable("id") Long id, @RequestBody Beynhesapgrubu hesap) {
        for (Beynhesapgrubu c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setTanim(hesap.getTanim());
                c.setCruser(hesap.getCruser());
                c.setCrdate(hesap.getCrdate());
                c.setUpduser(hesap.getUpduser());
                c.setUpddate(hesap.getUpddate());
                c.setIsactive(hesap.getIsactive());
                c.setDeleteflag(hesap.getDeleteflag());
                repository.save(c);
                return c;
            }
        }
        throw new BeynhesapgrubuNotFoundException();
    }
}
