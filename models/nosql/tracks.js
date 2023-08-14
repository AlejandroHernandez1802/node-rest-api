const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TracksSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		album: {
			type: String,
		},
		cover: {
			type: String,
			validate: {
				validator: (req) => {
					return true;
				},
				message: "ERROR_URL",
			},
		},
		artist: {
			name: {
				type: String,
			},
			nickname: {
				type: String,
			},
			nacionality: {
				type: String,
			},
		},
		duration: {
			start: {
				type: Number,
			},
			end: {
				type: Number,
			},
		},
		mediaid: {
			type: mongoose.Types.ObjectId,
		},
	},
	{
		timestamps: true, //createdAt, updatedAt
		versionKey: false,
	}
);

TracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("tracks", TracksSchema);
