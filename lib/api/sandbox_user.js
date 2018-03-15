class SandboxUser {

    create(attributes) {
        return this.post('sandbox/users', {
            data: {
                type: 'sandboxUser',
                attributes
            }
        });
    }

    list(query_params) {
        return this.get('sandbox/users', query_params);
    }

    find(id) {
        return this.get('sandbox/users/' + id);
    }

    update(id, attributes) {
        return this.patch('sandbox/users/' + id, {
            data: {
                type: 'sandboxUser',
                attributes
            }
        });
    }

    delete(id) {
        return this.delete('sandbox/users/' + id);
    }

}

module.exports = SandboxUser;