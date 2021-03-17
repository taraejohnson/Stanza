package stanzafinalproject.demo.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class UserPoem {

    @Id
    @GeneratedValue
    private Long id;
    private String poetName;
    @ManyToOne
    @JsonIgnore
    private User user;
    private String title;
    @Lob
    private String poemContent;

    public UserPoem(String poetName, String title, String poemContent) {
        this.poetName = poetName;
        this.title = title;
        this.poemContent = poemContent;
    }

    public UserPoem() {

    }

    public void addUserToPoem(User inUser){
        user = inUser;
    }

    public Long getId() {
        return id;
    }

    public String getPoetName() {
        return poetName;
    }

    public String getTitle() {
        return title;
    }

    public String getPoemContent() {
        return poemContent;
    }

    public User getUser() {
        return user;
    }

    @Override
    public String toString() {
        return "UserPoem{" +
                "id=" + id +
                ", poetName='" + poetName + '\'' +
                ", user=" + user +
                ", title='" + title + '\'' +
                ", poemContent='" + poemContent + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPoem userPoem = (UserPoem) o;
        return Objects.equals(id, userPoem.id) && Objects.equals(poetName, userPoem.poetName) && Objects.equals(user, userPoem.user) && Objects.equals(title, userPoem.title) && Objects.equals(poemContent, userPoem.poemContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, poetName, user, title, poemContent);
    }
}
