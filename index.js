const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

//dbConnection
const { add_books, get_all_books, get_a_book_by_id,add_user, find_a_user_by_user_id,add_record_details,find_books_bought_by_user,find_books_bought_by_user_id,find_books_by_book_id} = require('./controller/userController')
async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/library', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}
connectDB();



//Router
var router = express.Router();
router.post('/api/book', add_books);
router.get('/api/books', get_all_books);
router.get('/api/book/:id', get_a_book_by_id);
router.post('/api/user',add_user);
router.get('/api/user/:id', find_a_user_by_user_id);
router.post('/api/details',add_record_details);
router.get('/api/detail',find_books_bought_by_user);
router.get('/api/detail/:id',find_books_bought_by_user_id);
router.get('/api/bookdetail/:id',find_books_by_book_id);
app.use('/', router);

app.listen(8055, () => {

});