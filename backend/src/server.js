const app= require('./app');

const port= 8080

app.listen(port, ()=>{
    console.log('servidor rodando na porta: '+port)
})