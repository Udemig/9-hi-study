import { onAuthStateChanged } from "firebase/auth";
import Aside from "./Aside";
import Main from "./Main";
import Nav from "./Nav";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";

const Feed = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsub();
  }, []);

  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav user={user} />

      <Main user={user} />

      <Aside />
    </div>
  );
};

export default Feed;
