package com.mycompany.repository;

import com.mycompany.model.Beyneksper;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BeyneksperRepository extends CrudRepository<Beyneksper, Long> {
    List<Beyneksper> findByLastName(String lastName);
}
