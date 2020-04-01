const textInputValidator = (val) => {
    if(val.trim().length < 20) {
        return false;
    } else {
        return true;
    };
};

export default textInputValidator;
