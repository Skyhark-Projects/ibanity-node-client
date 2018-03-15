class Account {

    list(financial_institution_id, sandbox_user_id, params = {}) {
        return this.get(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts`, params);
    }

    find(id, sandbox_user_id, financial_institution_id, params = {}) {
        return this.get(`sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${id}`, params);
    }

    create(sandbox_user_id, financial_institution_id, attributes = {}) {
        throw('todo');
    }

    delete(id, sandbox_user_id, financial_institution_id) {
        throw('todo');
    }
}

module.exports = Account;