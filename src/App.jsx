import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapWiev from "./pages/MapWiev";
import ListWiev from "./pages/ListWiev";
import { useDispatch } from "react-redux";
import { getFlight } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

const App = () => {
  // harita götünümü aktif mi
  const [isMapView, setIsMapView] = useState(true);
  // detayı gösterilecek elemanın idsi
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();
  // uçuş verilerini
  useEffect(() => {
    dispatch(getFlight());
    setInterval(() => {
      dispatch(getFlight());
    }, 5000);
  }, []);
  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? "" : "active"}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi görünümü ekrana basılacağını belirle */}
      {isMapView ? (
        <MapWiev setDetailId={setDetailId} />
      ) : (
        <ListWiev setDetailId={setDetailId} />
      )}

      {/* detail id değeri varsa ekrana modal bas*/}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
