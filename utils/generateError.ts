import type { ErrorType } from "./types";

/**
 * generates an error object with the given status code, message, description, url, and data
 * @param statusCode - the status code of the error
 * @param message - the message of the error
 * @param desc - the description of the error
 * @param url - the url of the error
 * @param data - the data of the error
 * @returns the generated error object
 */
export function generateErrorStatus(statusCode: number, message: string, desc?: string, url?: string, data?: any | null): ErrorType | undefined {
    let statusMessage: string;
    switch (statusCode) {
        case 400:
            statusMessage = "Bad Request";
            break;
        case 401:
            statusMessage = "Unauthorized";
            break;
        case 403:
            statusMessage = "Forbidden";
            break;
        case 404:
            statusMessage = "Not Found";
            break;
        case 405:
            statusMessage = "Method Not Allowed";
            break;
        case 406:
            statusMessage = "Not Acceptable";
            break;
        case 407:
            statusMessage = "Proxy Authentication Required";
            break;
        case 408:
            statusMessage = "Request Timeout";
            break;
        case 409:
            statusMessage = "Conflict";
            break;
        case 410:
            statusMessage = "Gone";
            break;
        case 411:
            statusMessage = "Length Required";
            break;
        case 412:
            statusMessage = "Precondition Failed";
            break;
        case 413:
            statusMessage = "Request Entity Too Large";
            break;
        case 414:
            statusMessage = "Request-URI Too Long";
            break;
        case 415:
            statusMessage = "Unsupported Media Type";
            break;
        case 416:
            statusMessage = "Requested Range Not Satisfiable";
            break;
        case 417:
            statusMessage = "Expectation Failed";
            break;
        case 422:
            statusMessage = "Unprocessable Entity";
            break;
        case 423:
            statusMessage = "Locked";
            break;
        case 424:
            statusMessage = "Failed Dependency";
            break;
        case 426:
            statusMessage = "Upgrade Required";
            break;
        case 428:
            statusMessage = "Precondition Required";
            break;
        case 429:
            statusMessage = "Too Many Requests";
            break;
        case 431:
            statusMessage = "Request Header Fields Too Large";
            break;
        case 451:
            statusMessage = "Unavailable For Legal Reasons";
            break;
        case 500:
            statusMessage = "Internal Server Error";
            break;
        case 501:
            statusMessage = "Not Implemented";
            break;
        case 502:
            statusMessage = "Bad Gateway";
            break;
        case 503:
            statusMessage = "Service Unavailable";
            break;
        case 504:
            statusMessage = "Gateway Timeout";
            break;
        case 505:
            statusMessage = "HTTP Version Not Supported";
            break;
        case 506:
            statusMessage = "Variant Also Negotiates";
            break;
        case 507:
            statusMessage = "Insufficient Storage";
            break;
        case 508:
            statusMessage = "Loop Detected";
            break;
        case 510:
            statusMessage = "Not Extended";
            break;
        case 511:
            statusMessage = "Network Authentication Required";
            break;
        default:
            statusMessage = "Unknown Error";
            break;

    }
        return {
            url: url ? url : "",
            statusCode,
            statusMessage,
            message: message,
            description: desc? desc : "",
            data,
        }
}
