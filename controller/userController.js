const Book = require('../schema/books');
const User = require('../schema/user');
const Record = require('../schema/record');

//Post Method

const add_books = async (req, res) => {
    const book = new Book(req.body);
    book.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
};

//Get Method
const get_all_books = async (req, res) => {
    const books = await Book.find({});
    res.json({ books: books });
};

//Get By book_ID
const get_a_book_by_id = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.json({ book : book });
}

//Post Method for user

const add_user = async (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
};

//Get By User_ID
const find_a_user_by_user_id = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

//Post Method for record

const add_record_details = async (req, res) => {
    const data = req.body;
    const record = new Record(data);
    record.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
};

//Get By record
const find_books_bought_by_user = async (req, res) => {
    const record = await Record.find({ }).populate('book_id').populate('user_id')
    res.json({ record:record });
    
}
//Get by record_id
const find_books_bought_by_user_id = async (req, res) => {
    const record = await Record.find({user_id:req.params.id}).populate('book_id').populate('user_id')
    res.json({ record:record });
    
}
//Get by book_id
const find_books_by_book_id = async (req, res) => {
    const record = await Record.find({book_id:req.params.id}).populate('book_id').populate('user_id')
    res.json({ record:record });
    
}
module.exports = { add_books,get_all_books, get_a_book_by_id,add_user,find_a_user_by_user_id, add_record_details,find_books_bought_by_user,find_books_bought_by_user_id,find_books_by_book_id }