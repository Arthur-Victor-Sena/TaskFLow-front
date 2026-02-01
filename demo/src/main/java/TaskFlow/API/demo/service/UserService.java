package TaskFlow.API.demo.service;

import TaskFlow.API.demo.entity.User;
import TaskFlow.API.demo.repository.repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    repository dao;
    public UserService(repository repository) {
        this.dao = repository;
    }



    public List<User> listagem(){
        return   dao.findAll();
    }

    public ResponseEntity<String> novoUser(User user){

        User newUser = dao.save(user);

        if(newUser.getId() == null){
         return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Deu erro patão");
        }else {
           return ResponseEntity.status(HttpStatus.CREATED).body("Deu certo patrão");
        }



    }

}
