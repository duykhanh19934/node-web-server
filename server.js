const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('getcurrentYear',()=>{
	return new Date().getFullYear();
});
let a;
app.set("viewengine","hbs");
app.use((req,res,next)=>{
 let now = new Date().toString();
 console.log(now);
 next();
});

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:"Home Page"
	});
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:"About page"
	})
});
app.get('/projects',(req,res)=>{
	res.render('projects.hbs',{
		pageTitle:"Projects"
	});
});

app.listen(port,()=>{
	console.log("Server is running in port 3000");
})