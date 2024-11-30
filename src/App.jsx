import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
const states = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const defaultFeedbackState = () => {
  const currentFeedback = localStorage.getItem("feedback");
  if (currentFeedback) {
    return JSON.parse(currentFeedback);
  }
  return states;
};

export const App = () => {
  const [feedback, setFeedback] = useState(defaultFeedbackState);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => setFeedback(states);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const countPositiveFeedback = () => {
    return Math.round((feedback.good / totalFeedback) * 100);
  };

  return (
    <>
      <Description />
      <Options
        options={Object.keys(feedback)}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={feedback}
          totalFeedback={totalFeedback}
          totalPositive={countPositiveFeedback()}
        />
      ) : (
        <Notification message={"No feedback yet"} />
      )}
    </>
  );
};
