import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  fname: string;
  lname: string;
  _id: string;
  basket: [];
  favorites: [];
  partners: [];
  partner_requests: [];
  id: string;
}

const userSchema = new Schema<IUser>({
  fname: String,
  lname: String,
  _id: String,
  basket: Array,
  favorites: [],
  partners: [],
  partner_requests: [],
  id: String,
});

export default mongoose.model<IUser>("User", userSchema);
