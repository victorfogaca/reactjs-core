const setAccess = (accessObj) =>
{
    return {
        type: "SET_ACCESS",
        data: accessObj
    }
}
const setMenu = (menuObj) =>
{
    return {
        type: "SET_MENU",
        data: menuObj
    }
}

const logOut = () =>
{
    return {
        type: "LOG_OUT"
    }
}

export default {
    setAccess,
    setMenu,
    logOut
}