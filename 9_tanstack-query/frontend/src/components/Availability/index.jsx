import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Availability = ({ status, expand }) => {
  return (
    <div
      className={`flex items-center gap-4 border p-2 rounded-md ${
        status ? "bg-green-100" : "bg-red-100"
      } ${expand ? "pe-4" : ""}`}
    >
      {status ? (
        <MdEventAvailable className="text-xl text-green-700" />
      ) : (
        <CgUnavailable className="text-xl text-red-700" />
      )}

      {expand && (
        <p className="text-lg font-semibold">
          {status ? "Şuan Konaklanabilir" : "Konaklamak için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Availability;
