import {IApiDocPath} from "@/main/api/IApiDocPath";

export interface IApiDocInfo {
    title: string;
    version: string;
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
    openapi: string;

    /**
     *
     */
    info: IApiDocInfo;

    /**
     *
     */
    servers: Array<IApiDocServers>;

    /**
     *
     */
    paths: Record<string, IApiDocPath>;

    /**
     *
     */
    components: Record<string, any>;
}
