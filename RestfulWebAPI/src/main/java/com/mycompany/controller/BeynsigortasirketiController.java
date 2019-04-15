package com.mycompany.controller;

import com.mycompany.exception.BeynsigortasirketiNotFoundException;
import com.mycompany.model.Beynsigortasirketi;
import com.mycompany.repository.BeynsigortasirketiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynsigortasirketi")
public class BeynsigortasirketiController  {
    @Autowired
    BeynsigortasirketiRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynsigortasirketi> findAll() {
        List<Beynsigortasirketi> list = new ArrayList<Beynsigortasirketi>();
        for (Beynsigortasirketi cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynsigortasirketi findById(@RequestParam("id") long id) {
        Beynsigortasirketi result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynsigortasirketiNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynsigortasirketi> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynsigortasirketi> list = new ArrayList<Beynsigortasirketi>();
        for (Beynsigortasirketi cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynsigortasirketi> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynsigortasirketi> list = new ArrayList<Beynsigortasirketi>();
        for (Beynsigortasirketi cust : repository.findAll()) {
            if(cust.getIsactive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addEksper(@RequestBody Beynsigortasirketi yeniSirket) {
        repository.save(yeniSirket);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynsigortasirketi rCust = null;
        for (Beynsigortasirketi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynsigortasirketiNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynsigortasirketi updateCustomer(@PathVariable("id") Long id, @RequestBody Beynsigortasirketi sirket) {
        for (Beynsigortasirketi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setCrdate(sirket.getCrdate());
                c.setCruser(sirket.getCruser());
                c.setDeleteflag(sirket.getDeleteflag());
                c.setIsactive(sirket.getIsactive());
                c.setTanim(sirket.getTanim());
                c.setUpduser(sirket.getUpduser());
                c.setUpddate(sirket.getUpddate());
                repository.save(c);
                return c;
            }
        }
        throw new BeynsigortasirketiNotFoundException();
    }
}
