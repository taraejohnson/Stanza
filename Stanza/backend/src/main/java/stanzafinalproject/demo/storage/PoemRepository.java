package stanzafinalproject.demo.storage;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.Poems;

public interface PoemRepository extends CrudRepository <Poems,Long>{
}
