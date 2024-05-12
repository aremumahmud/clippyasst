async function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    return Math.floor(Math.random() * 9000) + 1000;
}

module.exports = generateOTP