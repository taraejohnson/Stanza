package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.User;

import javax.annotation.Resource;

@Service
public class UserStorage {
    @Resource
    private UserRepository userRepo;

    public UserStorage(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public Iterable<User> retrieveALlUsers(){
        return userRepo.findAll();
    }

    public User retrieveById(Long id){
        return userRepo.findById(id).get();
    }

    public void saveUser(User userAdded){
        userRepo.save(userAdded);
    }


}
