
import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "order_tracking_number")
    private String orderTrackingNumber;

    @Column(name = "total_price")
    private null totalPrice;

    @Column(name = "total_quantity")
    private Long totalQuantity;

    @Column(name = "billing_address_id")
    private Long billingAddressId;

    @Column(name = "customer_id")
    private Long customerId;

    @Column(name = "shipping_address_id")
    private Long shippingAddressId;

    @Column(name = "status")
    private String status;

    @Column(name = "date_created")
    private null dateCreated;

    @Column(name = "last_updated")
    private null lastUpdated;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderTrackingNumber() {
        return this.orderTrackingNumber;
    }

    public void setOrderTrackingNumber(String orderTrackingNumber) {
        this.orderTrackingNumber = orderTrackingNumber;
    }

    public null getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(null totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Long getTotalQuantity() {
        return this.totalQuantity;
    }

    public void setTotalQuantity(Long totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public Long getBillingAddressId() {
        return this.billingAddressId;
    }

    public void setBillingAddressId(Long billingAddressId) {
        this.billingAddressId = billingAddressId;
    }

    public Long getCustomerId() {
        return this.customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public Long getShippingAddressId() {
        return this.shippingAddressId;
    }

    public void setShippingAddressId(Long shippingAddressId) {
        this.shippingAddressId = shippingAddressId;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public null getDateCreated() {
        return this.dateCreated;
    }

    public void setDateCreated(null dateCreated) {
        this.dateCreated = dateCreated;
    }

    public null getLastUpdated() {
        return this.lastUpdated;
    }

    public void setLastUpdated(null lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
