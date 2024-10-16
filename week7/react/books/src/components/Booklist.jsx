import Book from "./Book";
import { useState } from "react";
import data from "../data.js";

const Booklist = () => {
  const [books, setBooks] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setBooks(filteredBooks)
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>
      {books.map((book) => (
        <Book title={book.title} image={book.image} author={book.author} />
      ))}
    </>
  );
};

export default Booklist;
