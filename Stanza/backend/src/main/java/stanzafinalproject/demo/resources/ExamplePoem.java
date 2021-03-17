package stanzafinalproject.demo.resources;

import javax.persistence.*;

@Entity
public class ExamplePoem {
    private String title;
    private String poet;
    @Column(length=500)
    private String poemUrl;
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private ExamplePoemType examplePoemType;

    protected ExamplePoem() {
    }

    public ExamplePoem(String title, String poet, ExamplePoemType examplePoemType, String poemUrl) {
        this.title = title;
        this.poet = poet;
        this.examplePoemType = examplePoemType;
        this.poemUrl = poemUrl;
    }

    public String getTitle() {
        return title;
    }

    public String getPoet() {
        return poet;
    }

    public ExamplePoemType getExamplePoemType() {
        return examplePoemType;
    }

    public String getPoemUrl() {
        return poemUrl;
    }

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ExamplePoem that = (ExamplePoem) o;

        if (title != null ? !title.equals(that.title) : that.title != null) return false;
        if (poet != null ? !poet.equals(that.poet) : that.poet != null) return false;
        if (poemUrl != null ? !poemUrl.equals(that.poemUrl) : that.poemUrl != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        return examplePoemType != null ? examplePoemType.equals(that.examplePoemType) : that.examplePoemType == null;
    }

    @Override
    public int hashCode() {
        int result = title != null ? title.hashCode() : 0;
        result = 31 * result + (poet != null ? poet.hashCode() : 0);
        result = 31 * result + (poemUrl != null ? poemUrl.hashCode() : 0);
        result = 31 * result + (id != null ? id.hashCode() : 0);
        result = 31 * result + (examplePoemType != null ? examplePoemType.hashCode() : 0);
        return result;
    }
}
