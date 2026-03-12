import type { Rule } from "../ruleEngine";
import { ClientType, type Clients } from "../../../../common/models";

export const ClientsRules: Rule<Clients>[] = [
    {
        name: "isPartner",
        evaluate: (Clients) => Clients.type_client === ClientType.PARTNER,
    },
    {
        name: "isClient",
        evaluate: (Clients) => Clients.type_client === ClientType.STANDARD,
    },
    {
        name: "canAccess",
        evaluate: (Clients) => Object.values(ClientType).includes(Clients.type_client)
    },
];
