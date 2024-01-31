express = require('express');
app = express();
port = 3000;

app.set('view engine','ejs');

usern = {
    username: "Anjali"
}

app.get('/',(req,res)=> {res.render('./pages/index.ejs',{usern:usern})});
app.listen(port,()=>{console.log(`server running on port ${port}`)});
