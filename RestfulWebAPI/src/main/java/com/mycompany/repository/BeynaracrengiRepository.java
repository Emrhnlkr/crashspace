package com.mycompany.repository;

import com.mycompany.model.Beynaracrengi;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BeynaracrengiRepository extends CrudRepository<Beynaracrengi, Long> {
    List<Beynaracrengi> findByTanim(String tanim);

}


