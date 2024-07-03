const Features = ({ arr }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <p className="font-bold text-xl">
        Popüler konaklama yeri imkan ve özellikleri
      </p>

      <div className="grid grid-cols-2 gap-4">
        {arr.map((i, key) => (
          <span key={key} className="border bg-zinc-100 py-1 px-2 rounded-md">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
