package TaskFlow.API.demo.controller;
import TaskFlow.API.demo.entity.User;
import TaskFlow.API.demo.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/1")
    public List<User> listagem(){
    return    userService.listagem();
    }

    @PostMapping
    public ResponseEntity<String> novoUser(@RequestBody User user){

        return userService.novoUser(user);
    }




}
