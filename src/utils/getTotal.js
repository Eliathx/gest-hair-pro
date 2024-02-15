export default function getTotal(data) {
  let monthlyTotal = 0;
  data.forEach((element) => {
    monthlyTotal += element.value;
  });
  return monthlyTotal;
}
