package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.Poems;

@Service
public class PoemsStorage {
    private PoemRepository poemRepo;

    public PoemsStorage(PoemRepository poemRepo) {
        this.poemRepo = poemRepo;
    }

    public Iterable <Poems> retrieveAllPoems(){
        return poemRepo.findAll();
    }

    public Poems retrieveById(Long id){
        return poemRepo.findById(id).get();
    }

    public void savePoems(Poems poemsToSave){
        poemRepo.save(poemsToSave);
    }

    public void deletePoemsById(Long id) {
        poemRepo.deleteById(id);
    }
}
