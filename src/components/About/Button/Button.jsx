import './button.scss';
const Button = ({ link, inline }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="button-49">{inline}</button>
    </a>
  );
};

export default Button;
