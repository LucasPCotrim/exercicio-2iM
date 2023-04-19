package com.exercicio.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exercicio.api.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
  
}
