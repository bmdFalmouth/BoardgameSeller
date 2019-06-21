const axios=require('axios');
const convert=require('xml-js');

import { Router } from 'express';

var router = Router();

router.get('/',function(req,res)
{
    res.send("You got all users");
});

router.get('/:username',function(req,res)
{
    //res.send(req.params.username);
    axios.get('https://www.boardgamegeek.com/xmlapi2/user?name='+req.params.username)
    .then(function(response)
    {
        var options = {ignoreComment: true, alwaysChildren: true,compact:true,spaces:4};
        var jsUser=convert.xml2js(response.data,options);
        const user=
        {
            "username":jsUser.user._attributes.name,
            "firstname":jsUser.user.firstname._attributes.value,
            "lastname":jsUser.user.lastname._attributes.value
        };
        res.send(user);
    })
    .catch(function(error)
    {
        console.log(error);
    });
});

module.exports=router;