const Card = (props) => {
  const { card, onClick } = props;

  const handleClick = () => onClick(card);

  return (
    <div className="place-card">
      <div className="place-card__delete"></div>
      <img
        className="place-card__image"
        data-modal-id="place-image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />

      <div className="place-card__description">
        <h3 className="place-card__name">{card.name}</h3>

        <div className="place-card__likebox">
          <button type="button" className="place-card__like-icon" />
          <div className="place-card__likes">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
