import Book from "./Book";
import { useState } from "react";

const Booklist = () => {
  const [books, setBooks] = useState([
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      id: 1,
      category: "History",
    },
    {
      title: "1984",
      author: "George Orwell",
      id: 2,
      category: "Dystopian Fiction",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      id: 3,
      category: "Classic Literature",
    },
  ]);

  const bookStatus = () => {};

  return (
    <>
      {books.map((book) => (
        <Book title={book.title} image={book.image} author={book.author} />
      ))}
    </>
  );
};

export default Booklist;
