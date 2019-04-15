package com.mycompany.controller;

import com.mycompany.exception.BeynarackullanimsekliNotFoundException;
import com.mycompany.model.Beynarackullanimsekli;
import com.mycompany.repository.BeynarackullanimsekliRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynarackullanimsekli")
public class BeynarackullanimsekliController {
    @Autowired
    BeynarackullanimsekliRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynarackullanimsekli> findAll() {
        List<Beynarackullanimsekli> list = new ArrayList<Beynarackullanimsekli>();
        for (Beynarackullanimsekli cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynarackullanimsekli findById(@RequestParam("id") long id) {
        Beynarackullanimsekli result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynarackullanimsekliNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynarackullanimsekli> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynarackullanimsekli> list = new ArrayList<Beynarackullanimsekli>();
        for (Beynarackullanimsekli cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynarackullanimsekli> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynarackullanimsekli> list = new ArrayList<Beynarackullanimsekli>();
        for (Beynarackullanimsekli cust : repository.findAll()) {
            if(cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbytanim", method = RequestMethod.GET)
    public Beynarackullanimsekli fetchDataByLastName(@RequestParam("tanim") String tanim) {
        Beynarackullanimsekli result = null;
        for (Beynarackullanimsekli cust : repository.findByTanim(tanim)) {
            result = cust;
        }
        if (result != null) {
            return result;
        } else {
            throw new BeynarackullanimsekliNotFoundException();
        }
    }

    @RequestMapping(value = "/findbycruser", method = RequestMethod.GET)
    public Beynarackullanimsekli findByCrUser(@RequestParam("CrUser") long CrUser) {
        Beynarackullanimsekli result = repository.findOne(CrUser);
        if (result != null) {
            return result;
        } else {
            throw new BeynarackullanimsekliNotFoundException();
        }
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addAracKullanimSekli(@RequestBody Beynarackullanimsekli yeniAracKullanimSekli) {
        repository.save(yeniAracKullanimSekli);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynarackullanimsekli rCust = null;
        for (Beynarackullanimsekli c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynarackullanimsekliNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynarackullanimsekli updateCustomer(@PathVariable("id") Long id, @RequestBody Beynarackullanimsekli customer) {
        for (Beynarackullanimsekli c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setTanim(customer.getTanim());
                c.setCrDate(customer.getCrDate());
                c.setCrUser(customer.getCrUser());
                c.setUpdUser(customer.getUpdUser());
                c.setUpdDate(customer.getUpdDate());
                c.setDeleteFlag(customer.getDeleteFlag());
                c.setIsActive(customer.getIsActive());
                repository.save(c);
                return c;
            }
        }
        throw new BeynarackullanimsekliNotFoundException();
    }

}

