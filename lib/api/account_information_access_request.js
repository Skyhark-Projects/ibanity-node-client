class AccountInformationAccessRequest {

    create_for_financial_institution(financial_institution_id, customer_access_token, attributes) {
        return this.post(`customer/financial-institutions/${financial_institution_id}/account-information-access-requests`, {
            data: {
                type: 'accountInformationAccessRequest',
                attributes
            }
        }, {}, customer_access_token);
    }

}

module.exports = AccountInformationAccessRequest;