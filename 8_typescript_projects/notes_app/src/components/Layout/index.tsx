import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../../types";

type Props = {
  notes: Note[];
};

const Layout = ({ notes }: Props) => {
  // url'den parametreyi al
  const { id } = useParams();

  // bütün notların arasında id'si urldeki parametreyle eşleşen note'un verilerini ara
  const found = notes.find((i) => i.id === id);

  // note bulunamazsa anasayfaya yönlendir
  if (!found) return <Navigate to="/" replace />;

  // alt route'un bileşenini ekrana bas ve bulunan note verilerini gönder
  return <Outlet context={found} />;
};

export default Layout;
