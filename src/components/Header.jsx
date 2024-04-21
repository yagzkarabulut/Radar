import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);
  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="" />
        <h3>Uçus Radarı</h3>
      </div>
      <p>
        {flightState.isLoading
          ? "Uçuşlar Hesaplanıyor"
          : flightState.isError
          ? "Üzgünüz bir hata oluştu"
          : flightState.flights.length + " Uçuş bulundu"}
      </p>
    </header>
  );
};

export default Header;
