export const userNameRegex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/gi;
export const phoneRegex = /^[\+][3]{1}[7]{1}[5]{1}(29|33|44|25)[1-9][0-9]{6}/g;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;