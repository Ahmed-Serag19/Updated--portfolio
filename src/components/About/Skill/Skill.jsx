import '../about.scss';

const Skill = ({ name, icon, color }) => {
  return (
    <div className="skill">
      <span style={{ color, display: 'flex' }} className="icon">
        {icon}
      </span>
      <h5>{name}</h5>
    </div>
  );
};

export default Skill;
