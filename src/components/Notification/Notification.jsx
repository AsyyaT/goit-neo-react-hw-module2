import css from "./Notification.module.css";

const Notification = ({ message }) => <p className={css.text}>{message}</p>;

export default Notification;
