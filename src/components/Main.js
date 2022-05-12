import React from "react";

import defaultAvatarPath from "images/image.png";
import Api from "../utils/api";

import Card from "./Card";

const Main = (props) => {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatarPath);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Api.getCurrentUser();

      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    };

    fetchUserData();
  }, []);

  React.useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await Api.getPlaces();

      setCards(cardsData);
    };

    fetchCards();
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic">
          <div className="profile__pic-edit" onClick={onEditAvatar}>
            <i className="icon icon-pencil"></i>
          </div>

          <img src={userAvatar} alt="default avatar" />
        </div>

        <div className="profile__data">
          <div className="profile__box">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
          />
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>

      <div id="places-list" className="places-list">
        {cards.map((card) => (
          <Card key={card._id} card={card} onClick={onCardClick} />
        ))}
      </div>
    </main>
  );
};

export default Main;
