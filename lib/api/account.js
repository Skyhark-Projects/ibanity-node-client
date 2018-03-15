class Account {

    list(financial_institution_id = null, customer_access_token = '', query_params = {}) {
        const uri = financial_institution_id ? `customer/financial-institutions/${financial_institution_id}/accounts` : `customer/accounts`;
        return this.get(uri, query_params, customer_access_token);
    }

    find(id, financial_institution_id, customer_access_token) {
        return this.get(`customer/financial-institutions/${financial_institution_id}/accounts/${id}`, {}, customer_access_token);
    }

}

module.exports = Account;