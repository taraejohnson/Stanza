package stanzafinalproject.demo.storage;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.ExamplePoem;

public interface ExamplePoemRepository extends CrudRepository<ExamplePoem, Long> {
}
