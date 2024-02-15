export default function getMonthlyTotal(data) {
  let monthlyTotal = 0;
  data.forEach((element) => {
    monthlyTotal += element.value;
  });
  return monthlyTotal;
}
