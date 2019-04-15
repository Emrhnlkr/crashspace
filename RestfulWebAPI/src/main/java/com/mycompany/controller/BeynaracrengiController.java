package com.mycompany.controller;

import com.mycompany.exception.BeynaracrengiNotFoundException;
import com.mycompany.model.Beynaracrengi;
import com.mycompany.repository.BeynaracrengiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynaracrengi")
public class BeynaracrengiController {
    @Autowired
    BeynaracrengiRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynaracrengi> findAll() {
        List<Beynaracrengi> list = new ArrayList<Beynaracrengi>();
        for (Beynaracrengi cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynaracrengi findById(@RequestParam("id") long id) {
        Beynaracrengi result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynaracrengiNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynaracrengi> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynaracrengi> list = new ArrayList<Beynaracrengi>();
        for (Beynaracrengi cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynaracrengi> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynaracrengi> list = new ArrayList<Beynaracrengi>();
        for (Beynaracrengi cust : repository.findAll()) {
            if(cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbytanim", method = RequestMethod.GET)
    public Beynaracrengi fetchDataByTanim(@RequestParam("tanim") String tanim) {
        Beynaracrengi result = null;
        for (Beynaracrengi cust : repository.findByTanim(tanim)) {
            result = cust;
        }
        if (result != null) {
            return result;
        } else {
            throw new BeynaracrengiNotFoundException();
        }
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addAracRengi(@RequestBody Beynaracrengi yeniaracrengi) {
        repository.save(yeniaracrengi);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynaracrengi rCust = null;
        for (Beynaracrengi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynaracrengiNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynaracrengi updateCustomer(@PathVariable("id") Long id, @RequestBody Beynaracrengi customer) {
        for (Beynaracrengi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setCrDate(customer.getCrDate());
                c.setTanim(customer.getTanim());
                c.setCrUser(customer.getCrUser());
                c.setUpdUser(customer.getUpdUser());
                c.setUpdDate(customer.getUpdDate());
                c.setIsActive(customer.getIsActive());
                c.setDeleteFlag(customer.getDeleteFlag());
                repository.save(c);
                return c;
            }
        }
        throw new BeynaracrengiNotFoundException();
    }
}