
const ping =  (req, res)=>{
    res.send('This is the response route setted by the router')
}

const home = (req, res)=>{
    if(req.method == 'GET'){
        console.log(req.requestTime);
        res.status(200).send(`this is a GET request on the Home page at ${req.requestTime}`)
    }else if(req.method == 'POST'){
        return res.send("this is an POST request.")
    }else if(req.method == 'HEAD'){
        res.set('X-custom-Header', 'Alive');
        res.status(204).end();
    }
    else{
        res.send(`method is ${req.method}`);
    }
}

export{ping, home}