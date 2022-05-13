import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const App = () => {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setisAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);

    setSelectedCard(null);
  };

  return (
    <div className="root">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div>
          <input
            className="popup__input"
            name="name"
            type="text"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error" id="name-error"></span>
        </div>

        <div>
          <input
            className="popup__input"
            name="about"
            type="text"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error" id="about-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="add-place"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div>
          <input
            type="text"
            className="popup__input"
            name="title"
            required
            placeholder="Название"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error" id="title-error"></span>
        </div>

        <div>
          <input
            type="url"
            className="popup__input"
            name="link"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error" id="link-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div>
          <input
            type="url"
            className="popup__input"
            name="avatar"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error" id="avatar-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm name="sure" title="Вы уверены?" buttonText="Сохранить" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
};

export default App;
