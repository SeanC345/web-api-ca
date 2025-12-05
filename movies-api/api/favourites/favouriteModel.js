import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Favourite", favouriteSchema);
