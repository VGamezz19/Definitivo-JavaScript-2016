const   express = require('express'),
        app = express();

        //Le decimos que utilizara PUG para renderizar
app.set('view engine', 'pug')

//Un nuevo Point, indicandole al servidor Web
//Que se sirva este directorio PUBLIC de manera estatica
//Va a ser algo virtual.
app.use(express.static('public'))

app.get(['/', '/signup', '/signin'], (req,res) => { 
    
    (req.url) ==='/' ? res.render('index', {title : 'Platzigram'}) : 
    (req.url) === '/signup'? res.render('index', {title : 'Platzigram - Signup'}) :  
    res.render('index', {title : 'Platzigram - Sigin'})
    //Tambien podemos hacer app.get('*')
    // Coje todas las rutas de las paginas
     
})

app.listen(5000, (err)=>{ 
    if(err) return console.log("Hubo un error"), process.exit(1)
    console.log("Todo correcto")
}) 