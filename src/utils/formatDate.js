import moment from "moment/moment";
import "moment/locale/tr";

//  unix formatındaki veriyi  normal formata çevir
const formatDate = (unix_time) => {
  // unix formatındaki saniye vetiyi date ile kullanabilmek için 1000 ile çarptık milisaniyyeye çevirdik
  const date = new Date(unix_time * 1000);
  // veri formatla
  // tarihi moment ile formatlıyoruz
  return moment(date).calendar();
};

export default formatDate;
