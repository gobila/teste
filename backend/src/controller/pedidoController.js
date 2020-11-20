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
            const {nome ,tel, nasc} = req.body;
            await knex('pedidos').insert({
                valor,
                create_at,
                update_at,
                cliente_id,
                produto_id,
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
            await knex('pedidos').update({valor,
                                        update_at,
                                        produto_id,})
                                    .where({pedido_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){

        try {
            const {cliente_id} = req.params;
            await knex('pedidos').where({pedido_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }

}