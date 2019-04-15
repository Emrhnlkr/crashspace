package com.mycompany.repository;

import com.mycompany.model.Beynaracmarka;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BeynaracmarkaRepository extends CrudRepository<Beynaracmarka, Long> {
    List<Beynaracmarka> findByTanim(String tanim);
}