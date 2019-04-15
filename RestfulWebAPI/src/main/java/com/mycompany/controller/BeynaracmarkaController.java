package com.mycompany.controller;


import com.mycompany.exception.BeynaracmarkaNotFoundException;
import com.mycompany.model.Beynaracmarka;
import com.mycompany.repository.BeynaracmarkaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynaracmarka")

public class BeynaracmarkaController {
    @Autowired
    BeynaracmarkaRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynaracmarka> findAll() {
        List<Beynaracmarka> list = new ArrayList<Beynaracmarka>();
        for (Beynaracmarka cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }


    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynaracmarka findById(@RequestParam("id") long id) {
        Beynaracmarka result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynaracmarkaNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynaracmarka> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynaracmarka> list = new ArrayList<Beynaracmarka>();
        for (Beynaracmarka cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynaracmarka> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynaracmarka> list = new ArrayList<Beynaracmarka>();
        for (Beynaracmarka cust : repository.findAll()) {
            if(cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbytanim", method = RequestMethod.GET)
    public Beynaracmarka fetchDataByTanim(@RequestParam("tanim") String tanim) {
        Beynaracmarka result = null;
        for (Beynaracmarka cust : repository.findByTanim(tanim)) {
            result = cust;
        }
        if (result != null) {
            return result;
        } else {
            throw new BeynaracmarkaNotFoundException();
        }
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addAracMarka(@RequestBody Beynaracmarka yeniaracmarka) {
        repository.save(yeniaracmarka);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynaracmarka rCust = null;
        for (Beynaracmarka c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynaracmarkaNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynaracmarka updateCustomer(@PathVariable("id") Long id, @RequestBody Beynaracmarka customer) {
        for (Beynaracmarka c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setTanim(customer.getTanim());
                c.setCrDate(customer.getCrDate());
                c.setUpdUser(customer.getUpdUser());
                c.setCrUser(customer.getCrUser());
                c.setUpdDate(customer.getUpdDate());
                c.setIsActive(customer.getIsActive());
                c.setDeleteFlag(customer.getDeleteFlag());
                repository.save(c);
                return c;
            }
        }
        throw new BeynaracmarkaNotFoundException();
    }

}
