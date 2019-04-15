package com.mycompany.controller;

import com.mycompany.exception.BeynusersNotFoundException;
import com.mycompany.model.Beynusers;
import com.mycompany.repository.BeynusersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beynusers")
public class BeynusersController {
    @Autowired
    BeynusersRepository repository;

    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beynusers> findAll() {
        List<Beynusers> list = new ArrayList<Beynusers>();
        for (Beynusers cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beynusers findById(@RequestParam("id") long id) {
        Beynusers result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeynusersNotFoundException();
        }
    }

    @RequestMapping(value = "/findbyuser", method = RequestMethod.POST)
    public Beynusers findByUser(@RequestParam("username") String username,@RequestParam("password") String password) {
        Beynusers result = null;
        for (Beynusers user : repository.findAll()) {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                result = user;
            }
        }
        if (result != null) {
            return result;
        } else {
            throw new BeynusersNotFoundException();
        }
    }

    @RequestMapping(value = "/findbysirketid", method = RequestMethod.GET)
    public List<Beynusers> findBySirketId(@RequestParam("sirketid") Long sirketId) {
        List<Beynusers> list = new ArrayList<Beynusers>();
        for (Beynusers cust : repository.findAll()) {
            if (cust.getSirketid() == sirketId) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beynusers> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beynusers> list = new ArrayList<Beynusers>();
        for (Beynusers cust : repository.findAll()) {
            if (cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }
    @RequestMapping(value = "/findbydeleteflag/{flag}/{beynSirketId}", method = RequestMethod.GET)
    public List<Beynusers> findBySirketId(@PathVariable("flag") Integer flag, @PathVariable("beynSirketId") Long beynsirketid) {
        List<Beynusers> list = new ArrayList<Beynusers>();
        for (Beynusers cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag) && cust.getSirketid().equals(beynsirketid)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beynusers> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beynusers> list = new ArrayList<Beynusers>();
        for (Beynusers cust : repository.findAll()) {
            if (cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String addEksper(@RequestBody Beynusers yeniUser) {
        repository.save(yeniUser);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beynusers rCust = null;
        for (Beynusers c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeynusersNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beynusers updateCustomer(@PathVariable("id") Long id, @RequestBody Beynusers user) {
        for (Beynusers c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setUsername(user.getUsername());
                c.setPassword(user.getPassword());
                c.setCrdate(user.getCrdate());
                c.setCruser(user.getCruser());
                c.setDeleteFlag(user.getDeleteFlag());
                c.setUpduser(user.getUpduser());
                c.setUpddate(user.getUpddate());
                c.setEksperid(user.getEksperid());
                c.setEposta(user.getEposta());
                c.setIsActive(user.getIsActive());
                c.setSirketid(user.getSirketid());
                c.setUyelikTuru(user.getUyelikTuru());
                repository.save(c);
                return c;
            }
        }
        throw new BeynusersNotFoundException();
    }
}