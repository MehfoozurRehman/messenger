import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/chatRoom", { replace: true });
        }}
        className="login__container__form"
      >
        <svg
          id="B"
          xmlns="http://www.w3.org/2000/svg"
          width="36.508"
          height="35.619"
          viewBox="0 0 36.508 35.619"
          className="login__container__form__logo"
        >
          <path
            id="B-2"
            data-name="B"
            d="M16.292-29.681C10.54-29.681,5.86-25.31,5.86-17.814S10.54-5.947,16.292-5.947h1.651c5.752,0,10.432-4.371,10.432-11.867S23.7-29.681,17.943-29.681H16.292m-3-2.947h7.655A14.58,14.58,0,0,1,35.279-17.814,14.58,14.58,0,0,1,20.945-3H13.29A14.58,14.58,0,0,1-1.044-17.814C-2.545-53.312,5.373-32.628,13.29-32.628Z"
            transform="translate(1.229 38.619)"
            fill="#fff"
          />
        </svg>
        <div className="login__container__form__heading">
          Login to Messenger
        </div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="login__container__form__input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login__container__form__input"
        />
        <button
          className="login__container__form__button login__container__form__button__base"
          type="submit"
        >
          Login
        </button>
        <div className="login__container__form__info">or login with</div>
        <button
          type="button"
          className="login__container__form__button login__container__form__button__google"
        >
          Google
        </button>
        <button
          type="button"
          className="login__container__form__button login__container__form__button__guest"
        >
          Guest
        </button>
      </form>
    </div>
  );
}
