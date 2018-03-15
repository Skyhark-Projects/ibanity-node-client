class SandboxFinancialInstitution {
    
    async list() {
        const res = await this.get('financial-institutions');s
        res.data  = res.data.filter((o) => o.attributes.sandbox);
        return res;
    }

    find(id) {
        return this.get('financial-institutions/' + id);
    }

    //-------------

    create(attributes) {
        return this.post('sandbox/financial-institutions', {
            data: {
                type: 'financialInstitution',
                attributes
            }
        });
    }

    update(id, attributes) {
        return this.patch('sandbox/financial-institutions/' + id, {
            data: {
                type: 'financialInstitution',
                attributes
            }
        });
    }

    delete(id) {
        return this.delete('sandbox/financial-institutions/' + id);
    }

}

module.exports = SandboxFinancialInstitution;