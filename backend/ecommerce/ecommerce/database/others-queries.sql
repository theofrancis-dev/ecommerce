
select * from product
left join product_category
on product.category_id = product_category.id;

commit;

select product.image_url from product;