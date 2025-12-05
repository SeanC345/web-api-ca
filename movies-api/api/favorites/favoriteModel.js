import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Favorite", favoriteSchema);
