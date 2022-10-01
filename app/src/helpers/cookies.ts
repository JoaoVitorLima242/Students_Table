import cookie from "js-cookie"


class Cookie {
    get(key: string) {
        return cookie.get(key)
    }

    set(key: string, value: string, options: Object) {
        cookie.set(key, value, options)
    }


    remove(key: string) {
        cookie.remove(key)
    }
}

export default new Cookie()