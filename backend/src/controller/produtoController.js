
module.exports={
    index(req, res){
        let db = [
            {'1':{Nome:'Cliente 1', idade:'20'}},
            {'2':{Nome:'Cliente 1', idade:'20'}},
            {'3':{Nome:'Cliente 1', idade:'20'}},
        ]

        return res.json(db);
    }

    
}