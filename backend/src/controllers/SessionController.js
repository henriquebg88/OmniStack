const connection = require('../database/connection');

module.exports = {

    async create(req, resp){
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong)
            return resp.status(400).json({ error : 'ONG not found'});

        return resp.json(ong);
    }

}