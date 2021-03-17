package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stanzafinalproject.demo.resources.ExamplePoemType;
import stanzafinalproject.demo.storage.ExamplePoemTypeStorage;

@RestController
@RequestMapping("/api/examplepoemtype")
public class ExamplePoemTypeController {

    private ExamplePoemTypeStorage examplePoemTypeStorage;

    public ExamplePoemTypeController(ExamplePoemTypeStorage examplePoemTypeStorage) {
        this.examplePoemTypeStorage = examplePoemTypeStorage;
    }

    @GetMapping("")
    public Iterable<ExamplePoemType> retrieveAllExamplePoemTypes() {
        return examplePoemTypeStorage.retrieveAllExamplePoemTypes();
    }

   /* @GetMapping("/{id}")
    public*/
}
