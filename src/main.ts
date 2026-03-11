import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// About
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

// Contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

app.post('/contact', (req, res) => {
    console.log('Form submitted:', req.body);

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Web server running in http://localhost:${port}`);
});