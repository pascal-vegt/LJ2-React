import Book from "./Book";
import { useState } from "react";

const Booklist = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      image: "afbeelding 1",
      title: "jgrjrwijgi3grmlgfjipgrw",
      author: "jgjgjgjgjgjgjgjg",
    },
    {
      id: 2,
      image: "afbeelding 1",
      title: "jgrjrwijgi3grmlgfjipgrw",
      author: "kiwi",
    },
    {
      id: 3,
      image: "afbeelding 1",
      title: "het leven 3",
      author: "binky1615",
    },
  ]);

  const bookStatus = () => {};

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          image={book.image}
          author={book.author}
        />
      ))}
    </>
  );
};

export default Booklist;
