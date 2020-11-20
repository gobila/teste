const knex = require('../data/db-config')


module.exports={
    //litar
    async index(req, res){
        const results = await knex('clientes');

        return res.json(results);
    },
    //criar
    async create(req, res, next){

        try {
            const {nome ,tel, nasc} = req.body;
            await knex('clientes').insert({
                nome,
                tel,
                nasc
            })
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
        
    },
    //atualizar
    async update(req, res, next){

        try {
            const {nome ,tel, nasc} = req.body;
            await knex('clientes').update({nome ,tel, nasc})
                                    .where({cliente_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){

        try {
            const {cliente_id} = req.params;
            await knex('clientes').where({cliente_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }

}