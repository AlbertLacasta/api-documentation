export interface IPathParameters {
    /**
     *
     */
    name: string;

    /**
     *
     */
    in: string;

    /**
     *
     */
    required: boolean;

    /**
     *
     */
    schema: Record<string, any>;
}

export interface IEndpointResponse {
    /**
     * 
     */
    description: string;

    /**
     * 
     */
    content: Record<string, any>
}

/**
 *
 */
export interface IEndpointRequest {
    /**
     *
     */
    summary?: string;

    /**
     *
     */
    description?: string;

    /**
     *
     */
    operationId: string;

    /**
     *
     */
    parameters: Array<IPathParameters>;

    /**
     *
     */
    responses: Record<string, IEndpointResponse>;
}


/**
 *
 */
export interface IApiDocEndpoint {
    get?: IEndpointRequest;
    post?: IEndpointRequest;
    put?: IEndpointRequest;
    delete?: IEndpointRequest;
}
