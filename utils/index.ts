export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "271959227bmshad39816207c2f93p124e96jsnf008205f61ee",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
