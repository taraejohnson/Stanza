package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stanzafinalproject.demo.resources.ExamplePoem;
import stanzafinalproject.demo.storage.ExamplePoemStorage;

@RestController
@RequestMapping("/api/examplepoems")
public class ExamplePoemController {
    private ExamplePoemStorage examplePoemStorage;

    public ExamplePoemController(ExamplePoemStorage examplePoemStorage) {
        this.examplePoemStorage = examplePoemStorage;
    }

    @GetMapping("")
    public Iterable<ExamplePoem> retrieveAllExamplePoems() {
        return examplePoemStorage.retrieveAllExamplePoems();
    }

    @GetMapping("/{id}")
    public ExamplePoem retrieveByID(@PathVariable Long id){
        return examplePoemStorage.retrieveById(id);
    }


}