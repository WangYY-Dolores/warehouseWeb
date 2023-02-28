import axios from "axios";

const http = axios.create({
    timeout: 40 * 1000,
    baseURL: "https://warehouse519.azurewebsites.net/api"
})

export async function getShipment(ShipperId: string): Promise<any> {
    return http.get(`/FetchData`, {
        params: {ShipperId: ShipperId}
    })
}