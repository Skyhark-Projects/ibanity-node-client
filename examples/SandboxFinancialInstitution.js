const Ibanity = require('../lib');

const ibanity = new Ibanity({
    cert:           __dirname + '/ssl/certificate.pem',
    key:            __dirname + '/ssl/private_key.pem',
    passphrase:     '....'
});

async function main() {
    
    //const res = await ibanity.get('financial-institutions');
    //const res = await ibanity.SandboxFinancialInstitution.delete('c2787187-8d97-46e0-a261-96b55413da99')
    const res = await ibanity.SandboxFinancialInstitution.create({
        name: "test sandbox"
    })

    console.log(res);
    
}

main().catch(console.error);