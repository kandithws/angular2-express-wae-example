import { model, Document, Schema } from 'mongoose';

export interface QuotationDocument extends Document {
  quote: string;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema({
  quote: String
}, { timestamps: true });

export const Quotation = model<QuotationDocument>('Quotation', schema);
