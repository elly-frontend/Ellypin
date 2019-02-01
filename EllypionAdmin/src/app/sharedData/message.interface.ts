
export interface Message  {
    parentMessage: string,
    type: Message_Type,
    publicKey: string,
    email:string,
    message: any,
    time:number
}

export enum Message_Type {
    BUY ='BUY',
    KYC = 'KYC',
    SEND_TOKEN_REQUEST = 'SEND_TOKEN_REQUEST',
    BURN_TOKEN_REQUEST = 'BURN_TOKEN_REQUEST',
    REDEEM = 'REDEEM',
    SEND_TOKEN_ACKNOWLEDGE = 'SEND_TOKEN_ACKNOWLEDGE',
    BURN_TOKEN_ACKNOWLEDGE = 'BURN_TOKEN_ACKNOWLEDGE'
}

