type Props = {
  open: () => void;
};

const Buttons = ({ open }: Props) => {
  return (
    <div className="mt-5 flex gap-10 lg:hidden">
      <button
        onClick={open}
        className="bg-white rounded-md p-1 px-4 flex-1 flex  gap-4  items-center justify-between"
      >
        Filtreler
        <img src="/list.svg" alt="" />
      </button>

      <button className="bg-white rounded-md p-1 px-4 flex-1 flex  gap-4  items-center justify-between">
        Sırala
        <img src="/list.svg" alt="" />
      </button>
    </div>
  );
};

export default Buttons;
