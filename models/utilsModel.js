import mongoose, { Schema } from "mongoose";

const departmentSchema = mongoose.Schema({
  department: {
    type: Array,
  },
});

const Department = mongoose.model("Department", departmentSchema);
export default Department;
