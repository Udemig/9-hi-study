import { useQueryClient } from "@tanstack/react-query";

const Error = ({ info, queryKey }) => {
  // kurulum
  const queryClient = useQueryClient();

  // places sorgusunu tekrar çalıştırmaya yarayan fonksiyon
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  };

  return (
    <>
      <div className="mt-10 bg-red-500 rounded-lg p-4 text-white font-semibold text-center">
        <p className="mb-5">Üzgünüz beklenmedik bir hata oluştu</p>
        <p>{info.message}</p>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={retry}
          className="border hover:bg-zinc-200 px-4 py-1 rounded-md"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
