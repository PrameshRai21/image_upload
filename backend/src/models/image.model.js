import mongoose, { Schema } from "mongoose"

const imageSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

export const Image = mongoose.model("Image", imageSchema)