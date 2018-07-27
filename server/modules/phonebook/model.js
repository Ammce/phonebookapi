import mongoose, { Schema } from 'mongoose';

//Please note that there is not field "createdAt" because I enabled timestamps that automatically generate that field
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},
    { timestamps: true });

export default mongoose.model('Person', PersonSchema);