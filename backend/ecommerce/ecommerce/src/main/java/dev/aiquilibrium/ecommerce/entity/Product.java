package dev.aiquilibrium.ecommerce.entity;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="sku")
    private String sku;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="unit_price")
    private BigDecimal unit_price; //DECIMAL (13,2)

    @Column(name="image_url")
    private String image_url;

    @Column(name="active")
    private boolean active;

    @Column(name="units_in_stock")
    private Integer units_in_stock;

    @Column(name="date_created")
    private @CreationTimestamp Date date_created;

    @Column(name="last_update")
    private @UpdateTimestamp Date last_update;

    @ManyToOne
    @JoinColumn (name = "category_id", nullable = false)
    private ProductCategory category;

}