const EmployeeCard = ({ id, name, email, role }) => {
  return (
    <tr className="employee-card">
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
  );
};

export default EmployeeCard;