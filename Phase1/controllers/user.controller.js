
const ping =  (req, res)=>{
    return res.send('This is the response route setted by the router')
}
const home = (req, res)=>{
    return res.send('This is the res from the home route setted in the home and user')
    
}

export{ping, home}