import { useEffect, useState } from 'react';
import Header from './components/Header';
import MapView from './pages/MapView';
import ListView from './pages/ListView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import Modal from './components/Modal';

const App = () => {
  // harita görünümü aktif mi state'i
  const [isMapView, setIsMapView] = useState(true);

  // detayı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // sayfa ilk açıldığında uçuşları al
    dispatch(getFlights());

    // ardından her 5 saniyede bir uçuşları al
    const intervalId = setInterval(() => {
      dispatch(getFlights());
    }, 50000);

    // componentWillUnmout (bileşenin ekrandan gitme olayı) çalışırsa sayacı durdur
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? 'active' : ''}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? '' : 'active'}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
