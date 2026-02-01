package TaskFlow.API.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "users" )
@Entity
@Getter
@Setter
public class User {
    public User() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String nome ;
    private String email;
    private String senha;



}
