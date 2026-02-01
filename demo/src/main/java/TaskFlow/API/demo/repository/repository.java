package TaskFlow.API.demo.repository;

import TaskFlow.API.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface repository extends JpaRepository<User, Long> {
}
