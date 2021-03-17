package stanzafinalproject.demo.resources;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class ExamplePoemType {

    @Id
    @GeneratedValue
    private Long id;
    private String typeName;
    @OneToMany(mappedBy = "examplePoemType")
    private Collection<ExamplePoem> examplePoem;
    @Column(length=1000)
    private String typeDescription;



    public ExamplePoemType(String typeName, ExamplePoem... examplePoem) {
        this.typeName = typeName;
        this.examplePoem = List.of(examplePoem);
    }

    public ExamplePoemType(String typeName, String typeDescription){
        this.typeName = typeName;
        this.typeDescription = typeDescription;
    }

    public ExamplePoemType() {
    }

    public Long getId() {
        return id;
    }

    public String getTypeName() {
        return typeName;
    }

    public String getTypeDescription() {
        return typeDescription;
    }

    @Override
    public String toString() {
        return "ExamplePoemType{" +
                "id=" + id +
                ", typeName='" + typeName + '\'' +
                ", typeDescription='" + typeDescription + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ExamplePoemType that = (ExamplePoemType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (typeName != null ? !typeName.equals(that.typeName) : that.typeName != null) return false;
        return typeDescription != null ? typeDescription.equals(that.typeDescription) : that.typeDescription == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (typeName != null ? typeName.hashCode() : 0);
        result = 31 * result + (typeDescription != null ? typeDescription.hashCode() : 0);
        return result;
    }
}
