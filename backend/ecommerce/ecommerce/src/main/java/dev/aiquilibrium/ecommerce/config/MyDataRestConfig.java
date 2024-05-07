package dev.aiquilibrium.ecommerce.config;

import dev.aiquilibrium.ecommerce.entity.Product;
import dev.aiquilibrium.ecommerce.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import jakarta.persistence.EntityManager; //also step 1

import jakarta.persistence.metamodel.EntityType; //step 1
import java.util.ArrayList; //step 1
import java.util.List;  //step 1
import java.util.Set;  //step 1

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    // -- step 1 exposing id --
    private EntityManager entityManager;                        // step 1
    //Autowire JPA entity manager
    @Autowired                                                  // step 1
    public MyDataRestConfig(EntityManager _entityManager) {     // step 1
        entityManager = _entityManager;                         // step 1
    }                                                           // step 1

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PATCH};

        // disable HTTP methods for Product: PUT, POST, DELETE and PATCH
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // disable HTTP methods for ProductCategory: PUT, POST, DELETE and PATCH
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        // step 1
        // call internal helper method
        exposeIds(config);
    }

    //step 1
    private void exposeIds(RepositoryRestConfiguration config){
        //expose entity ids
        //
        // - get a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        // create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();

        // - get the entity types for tje entities
        for (EntityType tempEntityType : entities ){
            entityClasses.add(tempEntityType.getJavaType());
        }

        //expose the entity ids for the array of entity/domain types.
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}