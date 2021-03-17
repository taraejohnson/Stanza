package stanzafinalproject.demo.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;


@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String userName;
    @OneToMany(mappedBy = "user")
    Collection<UserPoem> userPoems;

    public User(String userName) {
        this.userName = userName;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public Collection<UserPoem> getUserPoems() {
        return userPoems;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(userName, user.userName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName);
    }
}
