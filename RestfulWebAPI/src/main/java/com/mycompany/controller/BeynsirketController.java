package com.mycompany.controller;

import com.mycompany.exception.BeynsirketNotFoundException;
import com.mycompany.model.Beynsirket;
import com.mycompany.repository.BeynsirketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynsirket")
public class BeynsirketController {
    @Autowired
    BeynsirketRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynsirket> findAll() {
        List<Beynsirket> list = new ArrayList<Beynsirket>();
        for (Beynsirket cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbytanim", method = RequestMethod.GET)
    public Beynsirket findByHasarTespit(@RequestParam("tanim") String tanim) {
        Beynsirket rCust = null;
        for (Beynsirket cust : repository.findAll()) {
            if(cust.getTanim().equals(tanim)) {
                rCust = cust;
            }
        }
        if(rCust != null){
            return rCust;
        }else{
            throw new BeynsirketNotFoundException();
        }
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynsirket findById(@RequestParam("id") long id) {
        Beynsirket result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynsirketNotFoundException();
        }
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynsirket> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynsirket> list = new ArrayList<Beynsirket>();
        for (Beynsirket cust : repository.findAll()) {
            if(cust.getDeleteflag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynsirket> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynsirket> list = new ArrayList<Beynsirket>();
        for (Beynsirket cust : repository.findAll()) {
            if(cust.getIsactive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addEksper(@RequestBody Beynsirket yeniSirket) {
        repository.save(yeniSirket);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynsirket rCust = null;
        for (Beynsirket c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteflag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynsirketNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynsirket updateCustomer(@PathVariable("id") Long id, @RequestBody Beynsirket sirket) {
        for (Beynsirket c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setAdres(sirket.getAdres());
                c.setCepTelefonu(sirket.getCepTelefonu());
                c.setCrdate(sirket.getCrdate());
                c.setCruser(sirket.getCruser());
                c.setUpduser(sirket.getUpduser());
                c.setUpddate(sirket.getUpddate());
                c.setEposta(sirket.getEposta());
                c.setDeleteflag(sirket.getDeleteflag());
                c.setIsactive(sirket.getIsactive());
                c.setTanim(sirket.getTanim());
                repository.save(c);
                return c;
            }
        }
        throw new BeynsirketNotFoundException();
    }
}
