package dev.aiquilibrium.ecommerce.entity;
import lombok.Data;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

//@Data
@Entity
@Table(name = "product_category")
@Getter
@Setter
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany (cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Product> products;
}
