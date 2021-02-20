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

/**
 *
 */
export interface IPathRequest {
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
    responses: Record<string, any>;
}


/**
 *
 */
export interface IApiDocPath {
    get?: IPathRequest;
    post?: IPathRequest;
    put?: IPathRequest;
    delete?: IPathRequest;
}
