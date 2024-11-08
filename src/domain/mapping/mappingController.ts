export type Mapping = 
{
    id : string,
    owasp_scp : number[],
    owasp_asvs : string[],
    owasp_appsensor : string[],
    capec : number[],
    safecode : number[],

}

export class MappingController {
    private mapping: any;

    constructor(mapping: any) {
        this.mapping = mapping;
    }

    private static parseSuit(suit : string) : string
    {
        suit = suit.replaceAll("-" , " ");
        return suit;

    }

    public getCardMappings(card : string, addition : number = 0) : Mapping | undefined
    {
        for(let i = 0 ; i < this.mapping.suits.length ; i++)
        {
            for(let j = 0 ; j < this.mapping.suits[i].cards.length ; j++)
            {
                if(this.mapping.suits[i].cards[j].id == card)
                {
                    return this.mapping.suits[i].cards[j] as Mapping;
                }
            }
        }

        return undefined;
    }

}