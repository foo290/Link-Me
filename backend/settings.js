const ALLOWED_IPS = [
    '127.0.0.1'
]

const EXCLUDED_PATH_FROM_AUTH_MIDDLEWARE = [
    '/auth/login',
    '/auth/pwauth',
    '/user/create'
]

const SIGNUP_ESSENTIALS = {
    username: "string",
    password: "string",
    email: "string"
}

const ALLOWED_UPDATE_FIELDS = {
    email: "string",
    first_name: "string",
    last_name: "string"
}

module.exports = {
    ALLOWED_IPS,
    EXCLUDED_PATH_FROM_AUTH_MIDDLEWARE,
    ALLOWED_UPDATE_FIELDS,
    SIGNUP_ESSENTIALS
}
