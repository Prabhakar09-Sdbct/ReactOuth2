export default function authHeader() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails && userDetails.token) {
        return { Authorization: 'Bearer ' + userDetails.token };
    } else {
        return {};
    }
}