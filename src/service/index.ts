import axios from "axios";
import * as global from '../global'

const http = axios.create({
    timeout: 40 * 1000,
    baseURL: global.BASE_API_URL,
    headers: {
        "accept": "application/json",
        // "x-functions-clientid" : global.TOKEN
    }
})

export async function getShipment(ShipperID: string): Promise<any> {
    return http.get(`/FetchData`, {
        params: {ShipperID: ShipperID}
    })
}