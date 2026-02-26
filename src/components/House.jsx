export default function House({ image, title, values, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h5>{values}</h5>
      <p>{description}</p>
    </li>
  );
}