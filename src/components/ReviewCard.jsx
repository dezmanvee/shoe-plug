import { star } from "../assets/icons";

const ReviewCard = ({ customerName, feedback, imgURL, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="w-[120px] h-[120px] rounded-full object-cover"
      />
      <p>{feedback}</p>
      <div>
        <img
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        />
      </div>
      <p>({rating})</p>
    </div>
  );
};
export default ReviewCard;
