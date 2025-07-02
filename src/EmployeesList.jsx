import EmployeeCard from "./EmployeeCard";

const EmployeesList = ({ employeesData }) => {
  if (!Array.isArray(employeesData) || employeesData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
    <table className="employees-list">
      <thead>
        <tr className="employee-card header">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {employeesData.map((employee) => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            email={employee.email}
            role={employee.role}
          />
        ))}
      </tbody>
    </table>
      <hr />
      </>
  );
};

export default EmployeesList;