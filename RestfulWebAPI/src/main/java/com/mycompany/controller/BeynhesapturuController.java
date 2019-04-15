package com.mycompany.controller;

import com.mycompany.exception.BeynhesapturuNotFoundException;
import com.mycompany.model.Beynhesapturu;
import com.mycompany.repository.BeynhesapturuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynhesapturu")
public class BeynhesapturuController {
    @Autowired
    BeynhesapturuRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynhesapturu> findAll() {
        List<Beynhesapturu> list = new ArrayList<Beynhesapturu>();
        for (Beynhesapturu cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynhesapturu findById(@RequestParam("id") long id) {
        Beynhesapturu result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynhesapturuNotFoundException();
        }
    }

        @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
        public List<Beynhesapturu> findByDeleteFlag(@PathVariable("flag") Integer flag) {
            List<Beynhesapturu> list = new ArrayList<Beynhesapturu>();
            for (Beynhesapturu cust : repository.findAll()) {
                if(cust.getDeleteflag().equals(flag)) {
                    list.add(cust);
                }
            }
            return list;
        }

        @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
        public List<Beynhesapturu> findByIsActive(@PathVariable("flag") Integer flag) {
            List<Beynhesapturu> list = new ArrayList<Beynhesapturu>();
            for (Beynhesapturu cust : repository.findAll()) {
                if(cust.getIsactive().equals(flag)) {
                    list.add(cust);
                }
            }
            return list;
        }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addHesapturu(@RequestBody Beynhesapturu yeniHesapturu) {
        repository.save(yeniHesapturu);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynhesapturu rCust = null;
        for (Beynhesapturu c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynhesapturuNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynhesapturu updateCustomer(@PathVariable("id") Long id, @RequestBody Beynhesapturu customer) {
        for (Beynhesapturu c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setTanim(customer.getTanim());
                c.setCruser(customer.getCruser());
                c.setCrdate(customer.getCrdate());
                c.setUpduser(customer.getUpduser());
                c.setCarpan(customer.getCarpan());
                c.setEkspertakdirivarmi(customer.getEkspertakdirivarmi());
                c.setUpddate(customer.getUpddate());
                c.setDeleteflag(customer.getDeleteflag());
                c.setIsactive(customer.getIsactive());
                repository.save(c);
                return c;
            }
        }
        throw new BeynhesapturuNotFoundException();
    }
}
