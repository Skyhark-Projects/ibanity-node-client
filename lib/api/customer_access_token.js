class CustomerAccessToken {
    
    create(attributes) {
        return this.post('customer-access-tokens', {
            data: {
                type: 'customerAccessToken',
                attributes
            }
        });
    }
    
}

module.exports = CustomerAccessToken;