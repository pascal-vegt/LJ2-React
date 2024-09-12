import Book from "./Book";
import { useState } from "react";

const Booklist = () => {
  const [books, setBooks] = useState([
    {
        image: "afbeelding 1",
        title: "jgrjrwijgi3grmlgfjipgrw",
        author: "jgjgjgjgjgjgjgjg"
    },
    {
        image: "afbeelding 1",
        title: "jgrjrwijgi3grmlgfjipgrw",
        author: "kiwi"
    },
    {
        image: "afbeelding 1",
        title: "het leven 3",
        author: "binky1615"
    }
  ]);


  const bookStatus = () => {

  };

  return (
    <>
      {
        books.map((book) => (
            <Book title ={book.title} image = {book.image} author = {book.author}/>
        ))
      }
    </>
  );
};

export default Booklist;
