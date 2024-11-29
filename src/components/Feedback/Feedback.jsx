const Feedback = ({
  options: { good, neutral, bad },
  totalFeedback,
  totalPositive,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {totalPositive}%</li>
    </ul>
  );
};

export default Feedback;
