const app = require('./src/app')
const PORT = 3000


//iniciando o servidor
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))