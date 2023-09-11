const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    user_id: {
        type: String,
        required: 'This field is required.'
    }
});

personSchema.set('timestamps', true);

module.exports = mongoose.model('person', personSchema);