'use client'
export default function Form({ inputValue, onInputChange }) {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);  
  };

  return (
    <div className="flex bg-slate-700">

    <div className="flex-1 w-[90%] mx-10 my-5 bg-slate-500 rounded-lg" style={{ height: 'calc(2 * 2.5rem)' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for movie"
        className="w-full h-full bg-transparent text-white placeholder-white outline-none px-2 rounded-full text-center"
        />
    </div>
        </div>
  );
  