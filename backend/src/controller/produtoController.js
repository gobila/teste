const knex = require('../data/db-config')


module.exports={
    //litar
    async index(req, res){
        const results = await knex('produtos');

        return res.json(results);
    },
    //criar
    async create(req, res, next){

        try {
            const {nome ,valor} = req.body;
            await knex('produtos').insert({
                nome,
                valor,
            })
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
        
    },
    //atualizar
    async update(req, res, next){

        try {
            const {nome ,valor} = req.body;
            await knex('produtos').update({nome ,valor})
                                    .where({produto_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){

        try {
            const {nome ,valor} = req.params;
            await knex('produtos').where({produto_id})

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }

}