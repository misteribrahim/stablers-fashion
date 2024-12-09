import classes from "./index.module.scss";

const HaveNot = ({ imgSrc, heading, description, style }) => {
  return (
    <div className={`${classes.userItem} ${style ? classes.pB : ''}`}>
      <img src={imgSrc} alt="Item Title" className="mb-3" />
      <h6 className="text-dark">{heading}</h6>
      <p>{description}</p>
    </div>
  );
};

export default HaveNot;