const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require("path");
const PORT = process.env.PORT || 5000;

const staicPath = path.join(__dirname, "../public");
const tamplate_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', tamplate_path);
hbs.registerPartials(partials_path);

app.use(express.static(staicPath))

app.get("", (req, res)=>{
    res.render("index")
});
app.get("/about", (req, res)=>{
    res.render("about")
});
app.get("/weather", (req, res)=>{
    res.render("weather")
});
app.get("*", (req, res)=>{
    res.render("404", {
        errorMsg: 'opps! Page Not Found'
    })
});

app.listen(PORT, ()=>{
    console.log(`Listning Port no ${PORT}`);
});