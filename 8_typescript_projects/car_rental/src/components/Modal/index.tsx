import { CarType } from "../../types";
import Images from "./Images";

type Props = {
  car: CarType;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ car, isOpen, close }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black z-20 bg-opacity-25 grid place-items-center">
          <div className="relative bg-white p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
            <button
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
              onClick={close}
            >
              <img src="/close.svg" />
            </button>

            {/* fotoğraflar */}
            <Images car={car} />

            {/* bilgiler */}
            {Object.entries(car).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <h4 className="capitalize">{key.replace(/_/g, " ")}</h4>
                <p className="capitalize">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
