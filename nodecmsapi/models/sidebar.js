var mongoose = require('mongoose');

// Sidebar Schema
var SidebarSchema = mongoose.Schema({

    content: {
        type: String
    }

}, { collection:'sidebar' });

var User = module.exports = mongoose.model('Sidebar', SidebarSchema);