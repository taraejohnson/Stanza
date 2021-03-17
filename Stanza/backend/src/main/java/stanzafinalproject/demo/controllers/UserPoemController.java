package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.*;
import stanzafinalproject.demo.resources.User;
import stanzafinalproject.demo.resources.UserPoem;
import stanzafinalproject.demo.storage.UserPoemStorage;
import stanzafinalproject.demo.storage.UserStorage;

@RestController
@RequestMapping("/api/userpoems")
public class UserPoemController {
    private UserPoemStorage userPoemStorage;
    private UserStorage userStorage;

    public UserPoemController(UserPoemStorage userPoemStorage, UserStorage userStorage) {
        this.userPoemStorage = userPoemStorage;
        this.userStorage = userStorage;
    }

    @GetMapping("")
    public Iterable<UserPoem> retrieveAllUserPoems() {
        return userPoemStorage.retrieveAllUserPoems();
    }

    @GetMapping("/{id}")
    public UserPoem retrieveUserPoemById(@PathVariable Long id){
        return userPoemStorage.retrieveUserPoemById(id);
    }

    @PostMapping("")
    public UserPoem postUserPoems(@RequestBody UserPoem poemToAdd){
        userPoemStorage.addUserPoem(poemToAdd);
        return poemToAdd;
    }

    @DeleteMapping("/{id}")
    public void deleteUserPoem(@PathVariable Long id){
        userPoemStorage.removeUserPoem(id);
    }

    @PutMapping(value = "/{id}")
    public UserPoem updateUserPoem(@RequestBody UserPoem userPoem, @PathVariable Long id){
        System.out.println(userPoem.toString());
        if( userPoem.getId() != null){
            User tempUser = userStorage.retrieveById(id);
            userPoem.addUserToPoem(tempUser);
            userPoemStorage.addUserPoem(userPoem);
        }
        return userPoem;
    }

    @PatchMapping("/{id}")
    public UserPoem addPoemToUser(@RequestBody UserPoem poemToAdd, @PathVariable Long id){
        UserPoem tempUserPoem = userPoemStorage.retrieveUserPoemById(id);
        userPoemStorage.addUserPoem(poemToAdd);
        return tempUserPoem;
    }

}
