import { useEffect, useState } from "react";
import EmployeesList from "./EmployeesList";
import { fetchData } from "./fetchData";
import Pagination from "./Pagination";

const itemsPerPage = 10;
function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData({ setEmployeesData, setError });
  }, []);

  const last = currentPage * itemsPerPage;
  const first = last - itemsPerPage;
  const currentEmployees = employeesData.slice(first, last);

  return (
    <>
      <h1>Employee Data Table</h1>
      {error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <div>
          <EmployeesList employeesData={currentEmployees} />
          <Pagination
            totalItems={employeesData.length}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
}

export default App;
