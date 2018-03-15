class FinancialInstitution {
    
    list() {
        return this.get('financial-institutions');
    }
    
    find(id) {
        return this.get('financial-institutions/' + id);
    }

}

module.exports = FinancialInstitution;