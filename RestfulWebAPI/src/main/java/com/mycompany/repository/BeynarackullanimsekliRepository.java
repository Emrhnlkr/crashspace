package com.mycompany.repository;

import com.mycompany.model.Beynarackullanimsekli;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BeynarackullanimsekliRepository extends CrudRepository<Beynarackullanimsekli, Long> {
    List<Beynarackullanimsekli> findByTanim(String tanim);
}
