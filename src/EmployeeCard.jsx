const EmployeeCard = ({ id, name, email, role }) => {
  return (
    <div className="employee-card">
      <ul className="employee-details">
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{role}</li>
      </ul>
    </div>
  );
};

export default EmployeeCard;