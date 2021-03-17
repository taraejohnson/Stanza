package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.ExamplePoem;

@Service
public class ExamplePoemStorage {
    private ExamplePoemRepository examplePoemRepo;

    public ExamplePoemStorage(ExamplePoemRepository poemApiRepo) {
        this.examplePoemRepo = poemApiRepo;
    }

    public Iterable<ExamplePoem> retrieveAllExamplePoems() {
        return examplePoemRepo.findAll();
    }

    public ExamplePoem retrieveById(Long id){
        return examplePoemRepo.findById(id).get();
    }

    public void save(ExamplePoem examplePoem) {
        examplePoemRepo.save(examplePoem);
    }
}
