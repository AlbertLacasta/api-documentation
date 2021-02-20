import {IApiDoc} from "@/main/api/IApiDoc";
import {ApiDocServer} from "@/main/impl/ApiDocServer";
import {ApiDocEndpoint} from "@/main/impl/ApiDocEndpoint";
import {ApiDocGroup} from "@/main/impl/ApiDocGroup";

export class ApiDoc {

    /**
     *
     * @private
     */
    private readonly m_data: IApiDoc;

    /**
     *
     * @private
     */
    private readonly m_servers: Array<ApiDocServer>

    /**
     *
     * @private
     */
    private m_selectedServer: ApiDocServer;

    /**
     *
     * @private
     */
    private readonly m_groups: Array<ApiDocGroup>;

    /**
     *
     * @param data
     */
    public constructor(data: IApiDoc) {
        this.m_data = data;

        this.m_servers = data.servers.map((server) => new ApiDocServer(server));
        this.m_selectedServer =  this.m_servers[0];

        this.m_groups = [];
        const mapEndpoints = this.__groupEndPoints(data);
        mapEndpoints.forEach((endpoint, key) => this.m_groups.push(new ApiDocGroup(key, endpoint)));
    }

    /** *********************************************************** **/
    /** Info                                                        **/
    /** *********************************************************** **/

    /**
     *
     */
    public getInfoTitle(): string
    {
       return this.m_data.info.title;
    }

    /**
     *
     */
    public getInfoVersion(): string | undefined
    {
        return this.m_data.info.version;
    }

    /**
     *
     */
    public getInfoDescription(): string | undefined
    {
        return this.m_data.info.description;
    }

    /** *********************************************************** **/
    /** Servers                                                     **/
    /** *********************************************************** **/

    /**
     *
     */
    public getServers(): Array<ApiDocServer>
    {
        return this.m_servers;
    }

    /**
     * Getter and Setter of the server
     */
    public get server(): ApiDocServer
    {
        return this.m_selectedServer
    }

    public set server(server:ApiDocServer)
    {
        this.m_selectedServer = server;
    }

    /** *********************************************************** **/
    /** Groups of endpoints                                         **/
    /** *********************************************************** **/

    /**
     * Return the grouped endpoint by path
     */
    public getGroups(): Array<ApiDocGroup>
    {
        return this.m_groups;
    }

    /** *********************************************************** **/
    /** PRIVATE                                                     **/
    /** *********************************************************** **/

    private __groupEndPoints(data: IApiDoc)
    {
        const map = new Map();
        for (var path in data.paths) {
            const key =  path.substring(path.indexOf('/') + 1).split('/', path.indexOf('/') + 1)[0];
            const collection = map.get(key);
            for (var type in data.paths[path]) {
                const endData = data.paths[path];
                // @ts-ignore
                const apiDocPath = new ApiDocEndpoint(path, type.toUpperCase(), endData[type]);
                if (!collection) {
                    map.set(key, [apiDocPath]);
                } else {
                    collection.push(apiDocPath);
                }
            }
        }

        return map;
    }
}
