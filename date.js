
exports.getDate = function() {
    const today = new Date();
    const options = {
        day: "numeric",
        weekday: "long",
        month: "long",
        // year: "numeric"
    };

    return today.toLocaleString("en-US", options);
    }

exports.getDay = function() {
    const today = new Date();
    
    const options = {
        weekday: "long",
    };

    return today.toLocaleString("en-US", options);
}