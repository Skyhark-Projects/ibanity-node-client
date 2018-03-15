class SandboxTransaction {
    
    create(sandbox_user_id, financial_institution_id, sandbox_account_id, attributes) {
        return this.post(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${sandbox_account_id}/transactions`, {
            data: {
                type: 'sandboxTransaction',
                attributes
            }
        });
    }

    list(sandbox_user_id, financial_institution_id, sandbox_account_id, params) {
        return this.get(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${sandbox_account_id}/transactions`, params);
    }
    
    find(id, sandbox_user_id, financial_institution_id, sandbox_account_id) {
        return this.get(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${sandbox_account_id}/transactions/${id}`);
    }

    delete(id, sandbox_user_id, financial_institution_id, sandbox_account_id) {
        return this.delete(`/sandbox/financial-institutions/${financial_institution_id}/users/${sandbox_user_id}/accounts/${sandbox_account_id}/transactions/${id}`);
    }

}

module.exports = SandboxTransaction;