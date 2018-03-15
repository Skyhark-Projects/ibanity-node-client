# Ibanity NodeJs Library

This non-official Ibanity NodeJs Library provides convenient wrappers around the Ibanity API. The object attributes are dynamically defined based on the API response, supporting minor API changes seamlessly.

## Documentation

The NodeJs wrapper follows the same standard as the officiel Rubby wrapper available on their web site at: [Ruby API docs](https://documentation.ibanity.com/api/ruby).

## Installation

```
npm install ibanity
```

### Requirements

* NodeJs 7.0+.

## Usage

* Usage

    Ibanity must be configured using the details of your application on the [Ibanity developer portal](https://developer.ibanity.com).

    ```node
    const Ibanity = require('ibanity');

    const ibanity = new Ibanity({
        cert:           'path to cert or certificate buffer',
        key:            'path to private key or key buffer',
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