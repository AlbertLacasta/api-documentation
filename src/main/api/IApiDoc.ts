import {IApiDocEndpoint} from "@/main/api/IApiDocEndpoint";

export interface IApiDocInfo {
    title: string;
    version?: string;
    description?: string;
}

export interface IApiDocServers {
    url: string;
    description: string;
}


/**
 *
 */
export interface IApiDoc {

    /**
     *
     */
    components: Record<string, any>;

    /**
     *
     */
    info: IApiDocInfo;

    /**
     *
     */
    openapi: string;

    /**
     *
     */
    paths: Record<string, IApiDocEndpoint>;

    /**
     *
     */
    servers: Array<IApiDocServers>;

}
