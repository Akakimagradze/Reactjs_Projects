import React from "react";
import styles from "./Rating.module.css";
import { useState } from "react";
import ThankYou from "./images/image.png";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleIsSubmitted(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className={styles.container}>
      <div className={styles["thank-you-panel"]}>
        <img src={ThankYou} alt="thank-you-illustration" />

        <p className={styles.selected}>
          You selected {selectedRating} out of 5
        </p>

        <h1 className={styles.title}>Thank You!</h1>

        <p className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <form onSubmit={handleIsSubmitted} className={styles.panel}>
        <img
          className={styles.star}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Orange_star.svg/1200px-Orange_star.svg.png"
          }
          alt="star"
        />

        <h1 className={styles.title}>How did we do?</h1>

        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className={styles.group}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              type="button"
              onClick={() => handleRatingClicked(rating)}
              className={styles.rating}
            >
              {rating}
            </button>
          ))}
        </div>

        <button
          disabled={selectedRating === undefined}
          className={styles.submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rating;
