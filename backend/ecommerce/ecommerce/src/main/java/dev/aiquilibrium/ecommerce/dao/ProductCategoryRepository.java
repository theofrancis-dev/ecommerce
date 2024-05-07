package dev.aiquilibrium.ecommerce.dao;

import dev.aiquilibrium.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//productCategory is the name of the JSON entry
//path= ... actual reference for the path /product-category
@RepositoryRestResource(
        collectionResourceRel = "productCategory",
        path="product-category"
)
@CrossOrigin("http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository <ProductCategory, Long>{
}
