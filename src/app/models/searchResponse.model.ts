import { YtVideo } from "./ytVideo.model";

export class SearchResponse {
    message: string;
    error: boolean;
    data: Array<YtVideo>

    constructor(message: string, error: boolean, data: any) {
        this.message = message;
        this.error = error;
        this.data = data;
    }

    static parse(response: any) {
        try {
            return new SearchResponse(response.message, response.error, response.data)
        }
        catch (e) {
            throw e;
        }
    }
}