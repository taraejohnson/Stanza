package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;
import stanzafinalproject.demo.resources.UserPoem;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserPoemStorage {

    @Resource
    private UserPoemRepository userPoemRepo;



    public void addUserPoem(UserPoem userPoem){
        userPoemRepo.save(userPoem);
    }

    public void removeUserPoem(Long id){
        userPoemRepo.deleteById(id);
    }



    public Iterable<UserPoem> retrieveAllUserPoems (){
        return userPoemRepo.findAll();
    }

    public UserPoem retrieveUserPoemById(Long id){
        return userPoemRepo.findById(id).get();
    }


}
