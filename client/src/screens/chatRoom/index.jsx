import { Settings, Sliders } from "react-feather";

import { PngUser } from "assets";

export default function index() {
  return (
    <div className="chat__room__container__main">
      <div className="chat__room__container__main__left">
        <div className="chat__room__container__main__left__header">
          <div className="chat__room__container__main__left__header__heading">
            Recent Messages
          </div>
          <button className="chat__room__container__main__left__header__button">
            <Settings size={20} color="currentColor" />
          </button>
        </div>
        <div className="chat__room__container__main__left__main">
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
          <ChatUserEntry />
        </div>
      </div>
      <div className="chat__room__container__main__main">
        <div className="chat__room__container__main__main__header"></div>
        <div className="chat__room__container__main__main__main"></div>
      </div>
      <div className="chat__room__container__main__right">
        <div className="chat__room__container__main__right__header">
          <div className="chat__room__container__main__right__header__header">
            Activity
          </div>
          <button className="chat__room__container__main__right__header__button">
            <Sliders size={20} color="currentColor" />
          </button>
        </div>
        <div className="chat__room__container__main__right__sub">
          <div className="chat__room__container__main__right__sub__heading">
            Stories
          </div>
          <div className="chat__room__container__main__right__sub__main">
            <ChatUserStoryEntry />
            <ChatUserStoryEntry />
            <ChatUserStoryEntry />
            <ChatUserStoryEntry />
            <ChatUserStoryEntry />
          </div>
        </div>
        <div className="chat__room__container__main__right__main">
          <div className="chat__room__container__main__right__main__heading">
            Assets
          </div>
          <div className="chat__room__container__main__right__main__content">
            <ChatRoomAssetsEntry />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatUserStoryEntry({}) {
  return (
    <div className="chat__room__container__main__right__sub__main__entry">
      <div className="chat__room__container__main__right__sub__main__entry__image">
        <img
          src={PngUser}
          alt=""
          className="chat__room__container__main__right__sub__main__entry__image__img"
        />
      </div>
      <div className="chat__room__container__main__right__sub__main__entry__heading">
        John Doe
      </div>
    </div>
  );
}

function ChatUserEntry({}) {
  return (
    <div className="chat__room__container__main__left__main__entry">
      <div className="chat__room__container__main__left__main__image">
        <img
          src={PngUser}
          alt=""
          className="chat__room__container__main__left__main__image__img"
        />
        <div className="chat__room__container__main__left__main__image__status" />
      </div>
      <div className="chat__room__container__main__left__main__content">
        <div className="chat__room__container__main__left__main__content__heading">
          John Doe <span>1:24 pm</span>
        </div>
        <div className="chat__room__container__main__left__main__content__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ab
          voluptatum nulla nihil
        </div>
      </div>
    </div>
  );
}

function ChatRoomAssetsEntry({}) {
  return (
    <div className="chat__room__container__main__right__main__content__entry">
      <img
        src={PngUser}
        alt=""
        className="chat__room__container__main__right__main__content__entry__image"
      />
      <div className="chat__room__container__main__right__main__content__entry__content">
        <div className="chat__room__container__main__right__main__content__entry__content__heading">
          John Doe
        </div>
        <div className="chat__room__container__main__right__main__content__entry__content__info">
          <img
            src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
            alt=""
            className="chat__room__container__main__right__main__content__entry__content__info__img"
          />
        </div>
      </div>
    </div>
  );
}
