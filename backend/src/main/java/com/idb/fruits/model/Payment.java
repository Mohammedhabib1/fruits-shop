package com.idb.fruits.model;



import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Payment extends BaseEntity{

    @Column(name = "holder_name")
    private String holdername;
    @Column(name = "card_number")
    private String cardno;
    @Column(name = "cvcpwd")
    private String cvcpwd;
    @Column(name = "amount")
    private double amount;
    @Column(name = "payment_date")
    // private Date paymentDate;
    private Date date = new Date();
    @Column(name = "expir_date")
    private Date expirDate;
    


    
    // @Column(name = "method")
    // private String method;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

   
}
