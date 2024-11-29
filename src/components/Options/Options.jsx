import css from "./Options.module.css";

export default function Options({
  options,
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <>
      {options.map((option) => (
        <button
          className={css.buttonText}
          key={option}
          onClick={() => updateFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </>
  );
}
