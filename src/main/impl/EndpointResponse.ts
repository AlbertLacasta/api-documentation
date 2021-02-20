import {IEndpointResponse} from "@/main/api/IApiDocEndpoint";

/**
 *
 */
export class EndpointResponse {

    /**
     * The response code of the response (200, 400, 500 ....) HTTP codes
     * @private
     */
    private readonly m_code: string;

    /**
     *
     * @private
     */
    private readonly m_data: IEndpointResponse;

    /**
     *
     * @param data
     */
    public constructor(code: string, data: IEndpointResponse) {
        this.m_code = code;
        this.m_data = data;
    }

    /**
     * Get the response code
     */
    public getResponseCode(): string
    {
        return this.m_code;
    }

    /**
     * The description of the response
     */
    public getDescription(): string
    {
        return this.m_data.description;
    }

    /**
     *
     */
    public getContent(): Record<string, any>
    {
        return this.m_data.content;
    }

    /**
     * Convert class to JSON for print into a table
     */
    public toJson(): Record<string, any>
    {
        return {
            name: this.m_code,
            description: this.m_data.description,
            content: this.m_data.content
        }
    }
}
