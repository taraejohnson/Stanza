package stanzafinalproject.demo.storage;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.ExamplePoemType;

public interface ExamplePoemTypeRepository extends CrudRepository<ExamplePoemType, Long> {
}
