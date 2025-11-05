import StarRating from "../StarRating";

interface SliderProps {
  className?: string;
}

const Slider: React.FC<SliderProps> = ({ className }) => {
  return (
    <div>
      <StarRating />
    </div>
  );
};

export default Slider;
