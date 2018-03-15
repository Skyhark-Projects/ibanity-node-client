class Account {

    list(sandbox_user_id, financial_institution_id, params = {}) {
        return this.get(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts`, params);
    }

    find(id, sandbox_user_id, financial_institution_id, params = {}) {
        return this.get(`sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${id}`, params);
    }

    create(sandbox_user_id, financial_institution_id, attributes = {}) {
        return this.post(`sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts`, {
            data: {
                type: 'sandboxAccount',
                attributes
            }
        });
    }

    delete(id, sandbox_user_id, financial_institution_id) {
        return this.delete(`sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${id}`);
    }

}

module.exports = Account;