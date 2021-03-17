package stanzafinalproject.demo.storage;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
