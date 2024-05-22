import { navSections } from "../../utils/constants";
import { BiSolidDoorOpen } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const Nav = ({ user }) => {
  return (
    <nav className="flex flex-col justify-between items-end px-2 py-4">
      <div>
        <img className="w-14 mb-4" src="/x-logo.webp" />
        {navSections.map((i, key) => (
          <div
            className="flex items-center gap-3 text-2xl md:text-xl p-3 cursor-pointer rounded-lg transition hover:bg-[#505050b7] max-md:justify-center"
            key={key}
          >
            {i.icon}
            <span className="whitespace-nowrap max-md:hidden">{i.title}</span>
          </div>
        ))}
      </div>

      <div>
        {!user ? (
          <div className="w-12 h-12 bg-gray-400 rounded-full animate-bounce" />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2">
              <img
                className="rounded-full max-w-[45px]"
                src={user.photoURL}
                alt={user.displayName}
              />
              <p className="max-md:hidden">{user.displayName}</p>
            </div>

            <button
              onClick={() => signOut(auth)}
              className="flex justify-center gap-2 p-1 items-center bg-zinc-700 rounded text-2xl md:text-[15px] transition hover:bg-zinc-900"
            >
              <BiSolidDoorOpen />

              <span className="max-md:hidden">Çıkış yap</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
