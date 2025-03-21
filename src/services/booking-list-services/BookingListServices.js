  import db from "../../firebase";
  import { ref, get, remove, push } from "firebase/database";

  const dbRef = ref(db, "/reservas");

  const getAllReservations = () => {
    return get(dbRef);
  };

  const addReservation = (origin, destination, departureDate, returnDate) => {
    return push(dbRef, {
      origin: origin,
      destination: destination,
      departureDate: departureDate,
      returnDate: returnDate
    });
  };

  const removeReservation = (key) => {
    const dbRefReservation = ref(db, `/reservas/${key}`);
    return remove(dbRefReservation);
  };

  export default {
    getAllReservations,
    addReservation,
    removeReservation,
  };