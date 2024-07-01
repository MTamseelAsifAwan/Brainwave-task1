import { useState } from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([
    { id: 1, text: 'Complete assignment', completed: false },

  ]);
  const [inputText, setInputText] = useState('');

  // Toggle completion of todo item
  const toggleCompletion = (id) => {
    const updatedList = todolist.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodolist(updatedList);
    setcom(true);
  };

  // Delete todo item
  const handleDelete = (id) => {
    const updatedList = todolist.filter((item) => item.id !== id);
    setTodolist(updatedList);
  };
  const generateId = () => {
    return Math.floor(Math.random() * 10000);
  };
   // Handle input change
   const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle form submission to add new todo item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const newItem = {
        id: generateId(),
        text: inputText,
        completed: false,
      };
      setTodolist([...todolist, newItem]);
      setInputText('');
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 overflow-y-auto">
        <div className="text-neutral-800 relative overflow-hidden flex flex-col h-auto items-center justify-around sm:w-[24rem] sm:h-[16rem] md:w-[32rem] md:h-[20rem] lg:w-[34rem] lg:h-[34rem] xl:w-[34rem] xl:h-[34rem] border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6 pb-[25rem] center-page-gradient shadow-2xl mb-8">
          <h1 className="font-bold font-serif text-3xl leading-9 block">To do List</h1>
          <div className="flex flex-row">
            <input
              className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 block mt-4"
              placeholder="Add To do..."
              name="text"
              type="text"
              value={inputText}
              onChange={handleInputChange}
            />
            <span
              type="submit"
              onClick={handleSubmit}
              className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full w-10 h-10 flex items-center justify-center ml-2 mt-5 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 cursor-pointer hover:bg-red-500 hover:text-zinc-900 hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 128 128">
                <path fill="#CA2C31" d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"></path>
                <path fill="#A02422" d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77c.32 0 4.37.32 4.37.32l14.4-16.1l3.64-27.5l-13.19 6.64z"></path>
                <path fill="#CA2C31" d="M56.5 100.84s4.77-.97 8.17-2.59c3.4-1.62 7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89l6.59-11.87z"></path>
                <path fill="#F7D74D" d="M31.58 80.66s-5.74-.48-12.03 7.47c-5.74 7.26-8.43 19.08-9.47 22.12s-3.53 3.66-2.7 5.05s4.42 1.31 8.85.76s8.23-1.94 8.23-1.94s-.19.48-.83 1.52c-.23.37-1.03.9-.97 1.45c.14 1.31 11.36 1.34 20.32-7.88c9.68-9.95 4.98-18.11 4.98-18.11L31.58 80.66z"></path>
                <path fill="#FBF0B4" d="M33.31 85.29s-6.19.33-11.31 8.28s-7.5 17.16-7.01 17.78c.48.62 10.02-2.83 12.31-2.14c1.57.48.76 2.07 1.18 2.49c.35.35 4.49.94 11.19-6.32c6.71-7.26 5.12-17.46 5.12-17.46l-11.48-2.63z"></path>
                <path fill="#858585" d="M36.35 74.44s-3.11 2.77-4.22 4.36c-1.11 1.59-1.11 1.73-1.04 2.21c.07.48 1.22 5.75 6.01 10.37c5.88 5.67 11.13 6.43 11.89 6.43c.76 0 5.81-5.67 5.81-5.67l-18.45-17.7z"></path>
                <path fill="#437687" d="M50.1 91.24s5.04 3.31 13.49.47c11.55-3.88 20.02-12.56 30.51-23.52c10.12-10.58 18.61-23.71 18.61-23.71l-5.95-19.93L50.1 91.24z"></path>
                <path fill="#3F545F" d="m67.99 80.33l1.39-4.32l3.48.49s2.65 1.25 4.6 2.16c1.95.91 4.46 1.6 4.46 1.6l-4.95 4.18s-2.7-1.02-4.67-1.88c-2.22-.97-4.31-2.23-4.31-2.23z"></path>
                <path fill="#8DAFBF" d="M84.32 16.14s-9.62 5.58-23.41 18.63c-12.43 11.76-21.64 22.4-23.87 31.45c-1.86 7.58-.87 12.18 3.36 17.15c4.47 5.26 9.71 7.87 9.71 7.87s3.94.06 20.38-12.59C91 62.86 107.43 36.42 107.43 36.42L84.32 16.14z"></path>
                <path fill="#D83F22" d="M104.18 41.84s-8.37-3.57-14.34-11.9c-5.93-8.27-5.46-13.86-5.46-13.86s4.96-3.89 16.11-8.34c7.5-2.99 17.71-4.52 21.07-2.03s-2.3 14.98-2.3 14.98l-10.31 19.96l-4.77 1.19z"></path>
                <path fill="#6896A5" d="M68.17 80.4s-7.23-3.69-11.83-8.94c-8.7-9.91-10.5-20.79-10.5-20.79l4.37-5.13S51.3 57.1 60.63 67.09c6.08 6.51 12.43 9.49 12.43 9.49s-1.27 1.07-2.63 2.11c-.87.67-2.26 1.71-2.26 1.71z"></path>
                <path fill="#A02422" d="M112.71 44.48s4.34-5.23 8.45-17.02c4.1-11.79 3.33-18.08 3.33-18.08s-7.01-4.24-15.03-5.09c-7.61-.79-17.43.43-20.23 4.78s-1.19 18.69-1.19 18.69l24.67 16.72l.6-1.6z"></path>
                <path fill="#F2C560" d="M74.16 60.82s2.65 6.63 9.19 10.36c7.01 4.09 15.48 4.72 20.26 2.38c1.98-1.01 3.17-1.91 3.96-2.51c-.43-.54-1.17-1.12-2.31-1.72c-5.1-3.02-9.45-6.43-13.16-9.15c-4.11-3.14-8.26-6.29-8.26-6.29l-9.68 7.93z"></path>
                <path fill="#FBF0B4" d="M70.65 56.43s-6.43 1.54-14.26 9.81c-7.92 8.27-11.9 17.42-11.9 17.42s7.6 5.06 19.18 4.45c11.58-.6 17.52-9.52 17.52-9.52l-10.54-22.16z"></path>
              </svg>
            </span>
          </div>
          
          <ul >
            {todolist.map((item) => (
              <div key={item.id} className="space-y-1 p-1 mt-7">
                <div
                  role="alert"
                  className={`bg-blue-100 dark:bg-blue-900 border-l-4 ${
                    item.completed ? 'border-green-500 dark:border-green-700' : 'border-blue-500 dark:border-blue-700'
                  } text-blue-900 dark:text-blue-100 p-2 rounded-lg flex items-center justify-between transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105`}
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 flex-shrink-0 mr-2 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className={`text-xs font-semibold ${item.completed ? 'line-through text-green-600 dark:text-green-400' : ''}`}>{item.text}</p>
                  </div>
                  <button
                    onClick={() => toggleCompletion(item.id)}
                    className={`ml-4 cursor-pointer text-xs transition-all bg-blue-500 text-white px-1 py-2 rounded-lg border-blue-600 border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2 ${
                      item.completed ? 'bg-green-500 border-green-600 hover:bg-green-600 hover:border-green-700 active:bg-green-400 active:border-green-500' : ''
                    }`}
                  >
                    {item.completed ? 'Completed' : 'Complete'}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="ml-4 cursor-pointer text-xs transition-all bg-blue-500 text-white px-1 py-2 rounded-lg border-blue-600 border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
