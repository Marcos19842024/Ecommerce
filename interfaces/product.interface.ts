import { JSONContent } from '@tiptap/react';

export interface VariantProduct {
	id: number,
	target: string,
	type: string,
	kg: number,
	price: number,
	stock: number,
}

export interface Targets {
	target: string,
	type: string,
	kg: number,
	price: number
}

export interface Product {
	brand: string,
	name: string,
	id: number,
	description: JSONContent;
	created_at: string;
	images: string[],
	variants: VariantProduct[];
}

export interface PreparedProducts {
	brand: string,
	name: string,
	id: number,
	images: string[],
	price: number
	targets: {
		target: string,
		type: string,
		kg: number,
	}[];
	variants: VariantProduct[];
}