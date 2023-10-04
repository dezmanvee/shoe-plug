import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex-1 flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-4 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-lg font-montserrat leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold font-montserrat leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};
export default PopularProductCard;
