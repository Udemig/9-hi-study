const Gender = () => {
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Cinsiyet</h2>

      <div className="flex items-center gap-4">
        <input id="men" type="checkbox" />
        <label htmlFor="men" className="font-semibold select-none">
          Erkek
        </label>
      </div>

      <div className="flex items-center gap-4 ">
        <input id="women" type="checkbox" />
        <label htmlFor="women" className="font-semibold select-none">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;
