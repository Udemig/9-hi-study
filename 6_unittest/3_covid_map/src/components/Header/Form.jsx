import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded">
      <input
        placeholder="ülke ara"
        className="bg-transparent p-1 md:px-5 outline-none"
        type="text"
      />

      <button className="bg-green-500 p-[6px] text-xl w-full h-full rounded transition hover:bg-green-600">
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
