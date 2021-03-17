package stanzafinalproject.demo.storage;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.UserPoem;

public interface UserPoemRepository extends CrudRepository<UserPoem, Long> {
}
