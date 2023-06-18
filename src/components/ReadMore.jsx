import "../styles/read-more.css";
const ReadMore = ({ title, description }) => {
  return (
    <section className="read__more">
      <div className="container">
        <div className="">
          <h3>{title}</h3>
          <div>
            <p>{description}</p>
          </div>
          <button>Показать полностью</button>
        </div>
      </div>
    </section>
  );
};
export default ReadMore;
