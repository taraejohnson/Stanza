package stanzafinalproject.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import stanzafinalproject.demo.resources.Poems;
import stanzafinalproject.demo.storage.PoemsStorage;

@RestController
public class PoemController {

    private PoemsStorage poemsStorage;

    public PoemController(PoemsStorage poemsStorage) {
        this.poemsStorage = poemsStorage;
    }

    @GetMapping("/api/poems")
    public Iterable<Poems> retrieveAllCampus() {
        return poemsStorage.retrieveAllPoems();
    }

    @GetMapping("/api/poems/{id}")
    public Poems retrieveById(@PathVariable Long id){
        return poemsStorage.retrieveById(id);
    }

    @DeleteMapping("/api/poems/{id}")
    public Iterable<Poems> deletePoemsById(@PathVariable Long id){
        poemsStorage.deletePoemsById(id);
        return poemsStorage.retrieveAllPoems();
    }
}
