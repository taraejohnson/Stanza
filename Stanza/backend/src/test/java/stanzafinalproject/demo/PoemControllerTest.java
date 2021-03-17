package stanzafinalproject.demo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import stanzafinalproject.demo.resources.Poems;
import stanzafinalproject.demo.storage.PoemsStorage;

import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class PoemControllerTest {

    private PoemController undertest;
    private PoemsStorage poemsStorage;

    //Arrangement
    @BeforeEach
    void setUp(){
        poemsStorage = mock(PoemsStorage.class);
        undertest = new PoemController(poemsStorage);
        when(poemsStorage.retrieveAllPoems()).thenReturn(Collections.singletonList(new Poems("name","title","form")));
    }


        @Test
        public void shouldRetrieveAllPoems(){

        //Action
            Iterable<Poems> poems = undertest.retrieveAllCampus();
        //Assertion
        assertThat(poems).contains(new Poems("name","title","form"));

    }
    @Test
    public void allPoemsShouldBeMappedCorrectly() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(undertest).build();
        mockMvc.perform(get("/api/poems"))
                .andExpect(status().isOk());

    }
}
