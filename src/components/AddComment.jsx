import { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddComment = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-md mt-6">
      <h3 className="text-lg font-semibold mb-2">Agrega un comentario</h3>

      <div className="flex mb-4 text-green-900 text-2xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="focus:outline-none"
          >
            <FaStar
              className={star <= rating ? "text-green-700" : "text-gray-300"}
            />
          </button>
        ))}
      </div>

      <textarea
        maxLength={200}
        className="w-full h-24 p-2 rounded-md border focus:outline-none"
        placeholder="Agrega un comentario (máximo de caracteres 200)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button className="bg-green-900 text-white px-4 py-2 rounded mt-4 hover:bg-green-950 transition">
        Enviar comentario
      </button>
    </div>
  );
};

export default AddComment;
