package com.mycompany.controller;

import com.mycompany.exception.BeyneksperNotFoundException;
import com.mycompany.model.Beyneksper;
import com.mycompany.repository.BeyneksperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/beyneksper")
public class BeyneksperController {
    @Autowired
    BeyneksperRepository repository;
    
    @RequestMapping(value = "/findall", method = RequestMethod.GET)
    public List<Beyneksper> findAll() {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbyid", method = RequestMethod.GET)
    public Beyneksper findById(@RequestParam("id") long id) {
        Beyneksper result = repository.findOne(id);
        if (result != null) {
            return result;
        } else {
            throw new BeyneksperNotFoundException();
        }
    }

    @RequestMapping(value = "/findbysirketid/{beynSirketId}", method = RequestMethod.GET)
    public List<Beyneksper> findByBeynSirketID(@PathVariable("beynSirketId") Long beynSirketId) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            if(cust.getBeynSirketId().equals(beynSirketId)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/findbylastname", method = RequestMethod.GET)
    public List<Beyneksper> fetchDataByLastName(@RequestParam("lastname") String lastName) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findByLastName(lastName)) {
            list.add(cust);
        }
        return list;
    }

    @RequestMapping(value = "/findbydeleteflag/{flag}", method = RequestMethod.GET)
    public List<Beyneksper> findByDeleteFlag(@PathVariable("flag") Integer flag) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

   /* @RequestMapping(value = "/findbysirketidww/{flag}", method = RequestMethod.GET)
    public List<Beyneksper> findSirketId(@PathVariable("flag") Long flag) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            if(cust.getBeynSirketId().equals(flag) && cust.getDeleteFlag().equals(0)) {
                list.add(cust);
            }
        }
        return list;
    }*/

    @RequestMapping(value = "/findbydeleteflag/{flag}/{beynSirketId}", method = RequestMethod.GET)
    public List<Beyneksper> findBySirketId(@PathVariable("flag") Integer flag, @PathVariable("beynSirketId") Long beynsirketid) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            if(cust.getDeleteFlag().equals(flag) && cust.getBeynSirketId().equals(beynsirketid)) {
                list.add(cust);
            }
        }
        return list;
    }



    @RequestMapping(value = "/findbyisactive/{flag}", method = RequestMethod.GET)
    public List<Beyneksper> findByIsActive(@PathVariable("flag") Integer flag) {
        List<Beyneksper> list = new ArrayList<Beyneksper>();
        for (Beyneksper cust : repository.findAll()) {
            if(cust.getIsActive().equals(flag)) {
                list.add(cust);
            }
        }
        return list;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String addEksper(@RequestBody Beyneksper yeniEksper) {
        repository.save(yeniEksper);
        return "Done";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public String deleteCustomer(@PathVariable("id") Long id) {
        Beyneksper rCust = null;
        for (Beyneksper c : repository.findAll()) {
            if (c.getId().equals(id)) {
                rCust = c;
            }
        }
        if (rCust != null) {
            rCust.setDeleteFlag(1);
            repository.save(rCust);
            return "Done";
        } else {
            throw new BeyneksperNotFoundException();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public Beyneksper updateCustomer(@PathVariable("id") Long id, @RequestBody Beyneksper eksper) {
        for (Beyneksper c : repository.findAll()) {
            if (c.getId().equals(id)) {
                c.setFirstName(eksper.getFirstName());
                c.setLastName(eksper.getLastName());
                c.setBeynSirketId(eksper.getBeynSirketId());
                c.setCrDate(eksper.getCrDate());
                c.setCrUser(eksper.getCrUser());
                c.setUpdDate(eksper.getUpdDate());
                c.setUpdUser(c.getUpdUser());
                c.setIsActive(eksper.getIsActive());
                c.setDeleteFlag(eksper.getDeleteFlag());
                repository.save(c);
                return c;
            }
        }
        throw new BeyneksperNotFoundException();
    }
}
