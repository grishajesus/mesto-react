const PopupWithForm = (props) => {
  const { isOpen, name, title, children, onClose } = props;

  const rootClassName = `popup popup_type_${name} ${
    isOpen ? "popup_opened" : ""
  }`;

  return (
    <div className={rootClassName}>
      <div className="popup__content">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={name}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
