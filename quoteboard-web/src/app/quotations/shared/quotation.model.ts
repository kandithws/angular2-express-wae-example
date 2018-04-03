export class Quotation {
    id: string;
    quote: string;
    constructor(params?: any) {
        if (params) {
            this.id = params._id || params.id
            this.quote = params.quote;
        }
    }
}