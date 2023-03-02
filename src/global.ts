
export const BASE_API_URL = "https://warehouse519.azurewebsites.net/api";

export const TOKEN = "ijbmkKBldwQ7QNIru41u8Az95O-LjkdUhvl8xA6I-bRHAzFuqzOsPQ=="

export const GET_DEFAULT_HEADERS = () => {
    var headers = new Headers();
    headers.append('accept','application/json');
    headers.append("Access-Control-Allow-Origin", "*")
    headers.append('x-functions-key', TOKEN);
    return headers;
  };