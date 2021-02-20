import { useState, useMemo } from "react";
import useInterval from "../../hooks/useInterval";

const getLetterNaming = (
  dig: "hours" | "days" | "minutes" | "seconds",
  num: number
) => {
  switch (dig) {
    case "days":
      if (num === 1 || num === 21 || num === 31 || num === 41 || num === 51)
        return "День";
      if (
        (num > 1 && num < 5) ||
        (num > 21 && num < 25) ||
        (num > 31 && num < 35)
      )
        return "Дня";
      if ((num >= 5 && num < 21) || (num > 26 && num < 31)) return "Дней";
    case "hours":
      if (num === 1 || num === 21) return "Час";
      if ((num > 1 && num < 5) || num > 21) return "Часа";
      if (num >= 5 && num < 21) return "Часов";
    case "minutes":
      if (num === 1 || num === 21 || num === 31 || num === 41 || num === 51)
        return "Минута";
      if (
        (num > 1 && num < 5) ||
        (num > 21 && num < 25) ||
        (num > 31 && num < 35) ||
        (num > 41 && num < 45) ||
        (num > 51 && num < 55)
      )
        return "Минуты";
      if (
        (num >= 5 && num < 21) ||
        (num > 26 && num < 31) ||
        (num > 34 && num < 41) ||
        (num > 45 && num < 51) ||
        num > 54
      )
        return "Минут";
    case "seconds":
      if (num === 1 || num === 21 || num === 31 || num === 41 || num === 51)
        return "Секунда";
      if (
        (num > 1 && num < 5) ||
        (num > 21 && num < 25) ||
        (num > 31 && num < 35) ||
        (num > 41 && num < 45) ||
        (num > 51 && num < 55)
      )
        return "Секунды";
      if (
        num === 0 ||
        (num >= 5 && num < 21) ||
        (num > 24 && num < 31) ||
        (num > 34 && num < 41) ||
        (num > 44 && num < 51) ||
        num > 54
      )
        return "Секунд";
    default:
      return "Asdasda";
  }
};

const getZero = (dig: string) => {
  if (+dig < 10) {
    return `0${dig}`;
  } else {
    return dig;
  }
};

export const timerInit = (deadline: any) => {
  const initialState = {
    seconds: "00",
    secondsLetter: "Секунд",
    minutes: "00",
    minutesLetter: "Минут",
    hours: "00",
    hoursLetter: "Часов",
    days: "00",
    daysLetter: "Дней",
  };

  const [state, setState] = useState(initialState);

  useInterval(() => {
    const t = Date.parse(deadline) - Date.parse(new Date().toString());
    const seconds = Math.floor((t / 1000) % 60).toString();
    const minutes = Math.floor((t / 1000 / 60) % 60).toString();
    const hours = Math.floor((t / 1000 / 60 / 60) % 24).toString();
    const days = Math.floor(t / 1000 / 60 / 60 / 24).toString();
    setState({
      ...state,
      seconds: getZero(seconds),
      secondsLetter: getLetterNaming("seconds", +seconds),
      minutes: getZero(minutes),
      hours: getZero(hours),
      days: days,
    });
  }, 1000);

  useMemo(
    () =>
      setState({
        ...state,
        minutesLetter: getLetterNaming("minutes", +state.minutes),
      }),
    [state.minutes]
  );
  useMemo(
    () =>
      setState({
        ...state,
        hoursLetter: getLetterNaming("hours", +state.hours),
      }),
    [state.hours]
  );
  useMemo(
    () =>
      setState({
        ...state,
        daysLetter: getLetterNaming("days", +state.days),
      }),
    [state.days]
  );

  return state;
};

export default timerInit;
