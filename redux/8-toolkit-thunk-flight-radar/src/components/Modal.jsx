import axios from 'axios';
import { useEffect, useState } from 'react';
import { headers } from '../utils/constants';

const Modal = ({ detailId, close }) => {
  // uçuş detay verisi sadece modal bileşni içerisnde kullanıclaığı için store'da tutma ihtiyacı duymadık
  const [d, setDetail] = useState(null);

  useEffect(() => {
    const params = {
      flight: detailId,
    };

    axios
      .get('https://flight-radar1.p.rapidapi.com/flights/detail', {
        params,
        headers,
      })
      .then((res) => setDetail(res.data));
  }, []);

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>

        {!d ? (
          <div>Loader</div>
        ) : (
          <>
            <h3>{d.aircraft.model.text}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
