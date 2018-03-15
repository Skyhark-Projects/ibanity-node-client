class PaymentInitiationRequest {

    create_for_financial_institution(financial_institution_id, customer_access_token, attributes) {
        return this.post(`customer/financial-institutions/${financial_institution_id}/payment-initiation-requests`, {
            data: {
                type: 'paymentInitiationRequest',
                attributes
            }
        }, {}, customer_access_token);
    }

    find(id, financial_institution_id, customer_access_token) {
        return this.get(`customer/financial-institutions/${financial_institution_id}/payment-initiation-requests/${id}`, {}, customer_access_token);
    }

}

module.exports = PaymentInitiationRequest;