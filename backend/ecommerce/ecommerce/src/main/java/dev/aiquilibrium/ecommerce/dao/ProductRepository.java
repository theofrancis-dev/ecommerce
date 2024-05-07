package dev.aiquilibrium.ecommerce.dao;

import dev.aiquilibrium.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

//https://www.baeldung.com/spring-data-derived-queries
//https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html

@CrossOrigin
public interface ProductRepository
            extends JpaRepository <Product, Long>{

    /* ---- step 6 --
     * Query method. Match by category id
     * Behind the scenes, Spring will execute a query similar to this
     * SELECT * FROM product where category_id=?
     *
     * Spring Data Rest automatically exposes endpoint.
     * http://localhost:8080/api/products/search/findByCategoryId?id=2
    */
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    Page<Product> findByNameContaining(@Param("name") String name, Pageable pageable);

    //Page<Product> findProductById(@Param("id") Long id, Pageable pageable);
}
/*
 * You can provide your own custom query using @Query annotation
 * @Query ("select p from Product p where lower(p.name)
 * like lower(concat('%', :searchText, '%'))" +
 * "or lower(p.description) like lower(concat('%',searchText, '%'))")
 *  Page<Product> doMyCustomQuery @Param("searchText") String searchText,
 *  Pageable pageable);
 * */

