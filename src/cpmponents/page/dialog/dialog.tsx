import React, { useState } from "react";
import "./dialog.scss";
import avatar from "./avatar.png";
import cn from "classnames";

export const Dialog = () => {
  const [push, setPush] = useState([""]);
  const [value, setValue] = useState("");
  const [side, setSide] = useState(true);

  const setEvent = (event: any) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    if (!(value === "")) {
      setPush([...push, value]);
      setSide(!side);
    }
  };

  return (
    <div className="dialog">
      <div className="dialog__window">
        <div className="dialog__chat">
          <ul className="dialog__list">
            {push &&
              push.map((el: any, index) => (
                <div
                  key={index}
                  className={cn(
                    "dialog__block",
                    index % 2 === 0
                      ? "dialog__block_left"
                      : "dialog__block_right"
                  )}
                >
                  <img className="dialog__avatar" src={avatar} alt="" />
                  <li className="dialog__item">
                    <div
                      className={cn(
                        index % 2 === 0 && "dialog__item_arrowLeft"
                      )}
                    ></div>
                    <div
                      className={cn(
                        index % 2 === 1 && "dialog__item_arrowRight"
                      )}
                    ></div>
                    <span>{el}</span>
                  </li>
                </div>
              ))}
          </ul>
        </div>
        <textarea
          className="dialog__textarea"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Введите сообщение..."
          onChange={setEvent}
        ></textarea>
        <button onClick={onClick} className="dialog__btn">
          Отправить
        </button>
      </div>
    </div>
  );
};
