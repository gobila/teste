const knex = require('../data/db-config')


module.exports={
    //litar
    async index(req, res){
        const results = await knex('pedidos');

        return res.json(results);
    },
    //criar
    async create(req, res, next){

        try {
            const {valor,cliente_id,produto_id} = req.body;

            await knex('pedidos').insert({
                valor,
                cliente_id,
                produto_id,
            })
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
        
    },

}