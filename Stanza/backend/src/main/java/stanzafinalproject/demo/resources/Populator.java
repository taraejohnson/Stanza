package stanzafinalproject.demo.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import stanzafinalproject.demo.storage.PoemRepository;
import stanzafinalproject.demo.storage.PoemsStorage;

@Component
public class Populator implements CommandLineRunner {

    @Autowired
    PoemsStorage poemsStorage;


    @Override
    public void run(String... args) throws Exception {
        Poems testPoems1 = new Poems("Dylon","dylon's amazing poem","haiku");
        Poems testPoems2 = new Poems("Tara","tara's amazing poem","haiku");
        poemsStorage.savePoems(testPoems1);
        poemsStorage.savePoems(testPoems2);
    }


}
