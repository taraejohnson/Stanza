package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.*;
import stanzafinalproject.demo.resources.User;
import stanzafinalproject.demo.resources.UserPoem;
import stanzafinalproject.demo.storage.UserPoemStorage;
import stanzafinalproject.demo.storage.UserStorage;


@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserStorage userStorage;
    private UserPoemStorage userPoemStorage;

    public UserController(UserStorage userStorage, UserPoemStorage userPoemStorage) {
        this.userStorage = userStorage;
        this.userPoemStorage = userPoemStorage;
    }

    @GetMapping("")
    public Iterable<User> retrieveAllUsers(){
        return userStorage.retrieveALlUsers();
    }

    @GetMapping("/{id}")
    public User retrieveUserById(@PathVariable long id){
        return userStorage.retrieveById(id);
    }

    @PostMapping("")
    public User saveUser(@RequestBody User userNameToAdd){
        userStorage.saveUser(userNameToAdd);
        return userNameToAdd;
    }

    @PatchMapping("/{id}/poem")
    public User addPoemToUser(@RequestBody UserPoem poemToAdd, @PathVariable Long id){
        User tempUser = userStorage.retrieveById(id);
        poemToAdd.addUserToPoem(tempUser);
        userPoemStorage.addUserPoem(poemToAdd);
        return tempUser;

    }



}
