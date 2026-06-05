import { http } from "@/api/http";

export const getReservations= () =>
  http.get("/reservations");

export const createReservations= (data) =>
  http.post("/reservations", data);
