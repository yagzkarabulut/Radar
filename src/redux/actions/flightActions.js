import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../cosnants";

export const getFlight = createAsyncThunk("flight/getFlight", async () => {
  // api istediği at
  const res = await axios.request(options);

  // gelen veriyi formatla
  // dizi içerisinde gelen diziyi nesneye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //   formatlanmış veriyi payloada aktar
  return formatted;
});
