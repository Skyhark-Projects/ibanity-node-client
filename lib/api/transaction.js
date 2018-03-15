class Transaction {

    list(financial_institution_id, account_id, customer_access_token, params = {}) {
        return this.get(`/customer/financial-institutions/${financial_institution_id}/accounts/${account_id}/transactions`, params, customer_access_token);
    }

    find(id, financial_institution_id, account_id, customer_access_token) {
        return this.get(`/customer/financial-institutions/${financial_institution_id}/accounts/${account_id}/transactions/${id}`, {}, customer_access_token);
    }

}

module.exports = Transaction;