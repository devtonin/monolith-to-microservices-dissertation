package ifsuldeminas.ddermf.dto;

import ifsuldeminas.ddermf.entities.Seller;
import java.io.Serializable;

public class SaleSumDto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Double sum;
	
	public SaleSumDto() {
	}

	public SaleSumDto(Seller seller, Double sum) {
		this.sellerName = seller.getName();
		this.sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
}
