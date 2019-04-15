package com.mycompany.controller;

import com.mycompany.exception.BeynonarimservisiNotFoundException;
import com.mycompany.model.Beynonarimservisi;
import com.mycompany.repository.BeynonarimservisiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynonarimservisi")
public class BeynonarimservisiController {
    @Autowired
    BeynonarimservisiRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynonarimservisi> findAll() {
        List<Beynonarimservisi> list = new ArrayList<Beynonarimservisi>();
        for (Beynonarimservisi cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynonarimservisi findById(@RequestParam("id") long id) {
        Beynonarimservisi result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynonarimservisiNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynonarimservisi> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynonarimservisi> list = new ArrayList<Beynonarimservisi>();
        for (Beynonarimservisi cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynonarimservisi> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynonarimservisi> list = new ArrayList<Beynonarimservisi>();
        for (Beynonarimservisi cust : repository.findAll()) {
            if(cust.getIsactive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addonarimservisi(@RequestBody Beynonarimservisi yeniOnarimservisi) {
        repository.save(yeniOnarimservisi);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynonarimservisi rCust = null;
        for (Beynonarimservisi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynonarimservisiNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynonarimservisi updateCustomer(@PathVariable("id") Long id, @RequestBody Beynonarimservisi customer) {
        for (Beynonarimservisi c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setTanim(customer.getTanim());
                c.setUpduser(customer.getUpduser());
                c.setCrdate(customer.getCrdate());
                c.setUpduser(customer.getUpduser());
                c.setUpduser(customer.getUpduser());
                c.setDeleteflag(customer.getDeleteflag());
                repository.save(c);
                return c;
            }
        }
        throw new BeynonarimservisiNotFoundException();
    }
}
