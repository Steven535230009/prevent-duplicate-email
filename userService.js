const userRepository = require('../repositories/userRepository');
const { EMAIL_ALREADY_TAKEN } = require('../core/errors');

async function checkEmailExistence(email) {
    try {
        const emailExists = await userRepository.isEmailRegistered(email);
        if (emailExists) {
            throw EMAIL_ALREADY_TAKEN; 
        }
    } catch (error) {
        throw error; 
    }
}

module.exports = {
    checkEmailExistence,
};
