package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.ExamplePoemType;

import javax.annotation.Resource;

@Service
public class ExamplePoemTypeStorage {

    @Resource
    private ExamplePoemTypeRepository examplePoemTypeRepo;

    public void addExamplePoemType(ExamplePoemType examplePoemTypeToAdd) {
        examplePoemTypeRepo.save(examplePoemTypeToAdd);
    }

    public Iterable<ExamplePoemType> retrieveAllExamplePoemTypes() {
        return examplePoemTypeRepo.findAll();
    }
}
