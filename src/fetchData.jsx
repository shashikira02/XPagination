export const fetchData = async ({ setEmployeesData, setError }) => {
  try {
    const response = await fetch(
      " https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    setEmployeesData(data);
  } catch (err) {
    setError(err.message);
    alert('Failed to fetch data');
    console.error("Failed to fetch data: ", err);
  }
};
