import EmployeeCard from "./EmployeeCard";

const EmployeesList = ({ employeesData }) => {
  if (!Array.isArray(employeesData) || employeesData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="employees-list">
      <div className="employee-card header">
        <ul className="employee-details">
          <li>ID</li>
          <li>Name</li>
          <li>Email</li>
          <li>Role</li>
        </ul>
      </div>
      {employeesData.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          email={employee.email}
          role={employee.role}
        />
      ))}
      <hr />
    </div>
  );
};

export default EmployeesList;