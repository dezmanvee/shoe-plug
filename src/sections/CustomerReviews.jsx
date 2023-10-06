import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex-1 mt-24 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => {
          const { customerName} = review;
          return <ReviewCard key={customerName} {...review} />;
        })}
      </div>
    </section>
  );
};
export default CustomerReviews;
