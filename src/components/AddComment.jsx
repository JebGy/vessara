import { useState } from "react";
import { FaStar } from "react-icons/fa";
import CommentsListComponent from "./CommentsListComponent.astro";

const AddComment = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-md min-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold m-0">Agrega un comentario</h2>
        <div className="flex text-green-900 text-2xl ml-4">
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
