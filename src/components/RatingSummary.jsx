import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RatingSummary = () => {
  const totalReviews = 22;
  const rating = 4.3;
  const ratingDistribution = [15, 2, 3, 0, 2]; // 5★ to 1★

  const getBarWidth = (count) => `${(count / totalReviews) * 100}%`;

  return (
    <div className="p-6 w-1/2 mx-auto">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Comentarios de este producto
      </h2>

      {/* Sección dividida en dos columnas */}
      <div className="flex flex-row gap-8 mb-6">
        {/* Columna 1: número, estrellas, comentarios */}
        <div className="flex flex-col items-center gap-2 w-1/4">
          <div className="text-4xl font-bold">{rating}</div>

          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => {
              const full = i < Math.floor(rating);
              const half = i === Math.floor(rating) && rating % 1 >= 0.5;
              return full ? (
                <FaStar key={i} />
              ) : half ? (
                <FaStarHalfAlt key={i} />
              ) : (
                <FaRegStar key={i} />
              );
            })}
          </div>

          <p className="text-gray-600 text-sm">{totalReviews} comentarios</p>
        </div>

        {/* Columna 2: distribución del rating */}
        <div className="flex-1 space-y-2">
          {ratingDistribution.map((count, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-sm w-4 text-gray-700">{5 - index}★</span>
              <div className="flex-1 bg-gray-200 h-2 rounded overflow-hidden">
                <div
                  className="bg-gray-600 h-full"
                  style={{ width: getBarWidth(count) }}
                ></div>
              </div>
              <span className="text-sm w-4 text-gray-700 text-right">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSummary;
