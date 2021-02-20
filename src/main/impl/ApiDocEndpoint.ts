import {IEndpointRequest, IEndpointResponse} from "@/main/api/IApiDocEndpoint";
import {EndpointResponse} from "@/main/impl/EndpointResponse";

export class ApiDocEndpoint {

    /**
     *
     * @private
     */
    private readonly m_path: string;

    /**
     * TODO: create enum
     * The path type (GET; PUT; POST; DELETE)
     * @private
     */
    private readonly m_type: string;

    /**
     *
     * @private
     */
    private readonly m_data: IEndpointRequest;

    /**
     *
     * @private
     */
    private readonly  m_responses: Array<EndpointResponse>;

    /**
     *
     * @param data
     */
    public constructor(path: string, type: string, data: IEndpointRequest) {
        this.m_path = path;
        this.m_type = type;
        this.m_data = data;

        this.m_responses = [];
        for (var response in data.responses) {
            this.m_responses.push(new EndpointResponse(response, data.responses[response]))
        }
    }

    /**
     *
     */
    public getPathUrl(): string {
        return this.m_path;
    }

    /**
     * The path type (GET; PUT; POST; DELETE)
     */
    public getPathType(): string
    {
        return this.m_type;
    }

    /**
     *
     */
    public getPathSummary(): string
    {
        if(this.m_data && this.m_data.summary) {
            return this.m_data.summary;
        }
        return "";
    }

    /**
     *
     */
    public getPathDescription(): string
    {
        if(this.m_data && this.m_data.description) {
            return this.m_data.description;
        }
        return "";
    }

    /**
     *
     */
    public getResponses(): Array<EndpointResponse>
    {
        return this.m_responses;
    }

    public getResponseJson(): Array<Record<string, any>>
    {
        return this.m_responses.reduce((acc:Array<Record<string, any>>, response:EndpointResponse, key) => {
            // add object key to our object i.e. charmander: { type: 'water' }
            acc[key] = response.toJson();
            return acc;
        }, []);
    }
}
