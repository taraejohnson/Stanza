package stanzafinalproject.demo.resources;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Poems {
    private String poet;
    private String title;



    private String form;
    @Id
    @GeneratedValue
    private Long id;

    public Poems(String poet, String title, String form) {
        this.poet = poet;
        this.title = title;
        this.form = form;
    }

    protected Poems() {

    }

    public Long getId() {
        return id;
    }


    public String getPoet() {
        return poet;
    }

    public String getTitle() {
        return title;
    }

    public String getForm() {
        return form;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Poems poems = (Poems) o;
        return Objects.equals(poet, poems.poet) && Objects.equals(title, poems.title) && Objects.equals(form, poems.form) && Objects.equals(id, poems.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(poet, title, form, id);
    }


}
