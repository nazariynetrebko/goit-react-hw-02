import styles from './feedback.module.css';

function Feedback({ good, neutral, bad, totalFeedback, positivePercentage }) {
  return (
    <div className={styles.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
export default Feedback;
