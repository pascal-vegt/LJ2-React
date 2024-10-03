import "./App.css";

function App() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <article className="size-90">
        <div className="flex-row flex">
          <img className="size-10" src="/logo.png" alt="" />
          <h1 className="text-2xl font-bold dark:text-slate-300">
            Work<span className="text-indigo-500">cation</span>
          </h1>
        </div>
        <img className="rounded-3xl size-2/6" src="/mainimage.png" alt="" />
        <h1 className="text-3xl font-bold dark:text-slate-300">
          You can work from anywhere.{" "}
          <span className="text-indigo-500">Take advantage of it</span>
        </h1>
        <p className="dark:text-slate-300">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <button className="bg-indigo-500 rounded p-2 px-4 text-neutral-50 font-semibold">
          Book your escape
        </button>
      </article>
    </section>
  );
}

export default App;
