import {IApiDoc} from "@/main/api/IApiDoc";
import {ApiDocServer} from "@/main/impl/ApiDocServer";
import {ApiDocPath} from "@/main/impl/ApiDocPath";
import {ApiDocGroup} from "@/main/impl/ApiDocGroup";
import {IApiDocPath} from "@/main/api/IApiDocPath";

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
    private readonly m_groups: Array<ApiDocGroup>;

    /**
     *
     * @private
     */
    private readonly m_paths: Array<ApiDocPath>;


    /**
     *
     * @param data
     */
    public constructor(data: IApiDoc) {
        this.m_data = data;

        this.m_servers = data.servers.map((server) => new ApiDocServer(server));
        this.m_paths = [];
        this.m_groups = [];

        const mapEndpoints = this.__groupEndPoints(data);
        mapEndpoints.forEach((endpoint, key) => this.m_groups.push(new ApiDocGroup(key, endpoint)));
    }

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
    public getInfoVersion(): string
    {
        return this.m_data.info.version;
    }

    /**
     *
     */
    public getServers(): Array<ApiDocServer>
    {
        return this.m_servers;
    }

    /**
     *
     */
    public getGroups(): Array<ApiDocGroup>
    {
        return this.m_groups;
    }

    /**
     *
     */
    public getPaths(): Array<ApiDocPath>
    {
        return this.m_paths;
    }

    private __groupEndPoints(data: IApiDoc)
    {
        const map = new Map();
        for (var path in data.paths) {
            const key =  path.substring(path.indexOf('/') + 1).split('/', path.indexOf('/') + 1)[0];
            const collection = map.get(key);
            for (var type in data.paths[path]) {
                const endData = data.paths[path];
                // @ts-ignore
                const apiDocPath = new ApiDocPath(path, type.toUpperCase(), endData[type]);
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
