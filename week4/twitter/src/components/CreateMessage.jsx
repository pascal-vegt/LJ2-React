const CreateMessage = () => {
  const userInputHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form action="">
      <textarea cols="50" rows="5" onChange={userInputHandler}></textarea>
      <button>Toevoegen</button>
    </form>
  );
};

export default CreateMessage;
