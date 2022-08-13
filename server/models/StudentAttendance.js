const { Schema, model } = require("mongoose");

const studentAttendanceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: "adminAttendance",
        required: true
    },
}, {timestamps: true});

const studentAttendance = model("studentAttendance", studentAttendanceSchema);

module.exports = studentAttendance;