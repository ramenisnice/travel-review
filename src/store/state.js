let defaultCity = "北京";
try {
  if (localStorage.city) {
    defaultCity = localStorage.getItem("city");
  }
} catch (e) {
  console.log(e);
}

export default {
  city: defaultCity,
};
