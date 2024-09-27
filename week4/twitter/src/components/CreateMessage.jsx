
const CreateMessage = ({ message }) => {
let userInputHandler;


  return (
    <form>
      <textarea
        cols="50"
        rows="5"
        value={message}
        onChange={userInputHandler}
      ></textarea>
      <button type="submit">Toevoegen</button>
    </form>
  );
};

export default CreateMessage;
