module.exports = {
    FinancialInstitution:        require('./financial_institution.js'),
    SandboxFinancialInstitution: require('./sandbox_financial_institution.js'),
    Account:                     require('./account.js'),
    SandboxAccount:              require('./sandbox_account.js'),
    AccountInformationAccessRequest: require('./account_information_access_request.js'),
    CustomerAccessToken:         require('./customer_access_token.js'),
    PaymentInitiationRequest:    require('./payment_initiation_request.js'),
    SandboxTransaction:          require('./sandbox_transaction.js'),
    SandboxUser:                 require('./sandbox_user.js'),
    Transaction:                 require('./transaction.js')
}