package stanzafinalproject.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import stanzafinalproject.demo.storage.PoemRepository;
import stanzafinalproject.demo.resources.Poems;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {

    @Autowired
    private PoemRepository poemRepo;
    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void PoemRepoShouldRetrieveAllPoems(){
        Poems testPoems = new Poems("Poet","Title of Poem", "Haiku");

        poemRepo.save(testPoems);
        entityManager.flush();
        entityManager.clear();

        Poems retrievePoems = poemRepo.findById(testPoems.getId()).get();

        assertThat(retrievePoems).isEqualTo(testPoems);

    }
}
