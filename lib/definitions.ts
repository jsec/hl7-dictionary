export interface FieldDefinition {
    datatype: string
    desc: string
    opt: number
    rep: number
    table?: number
    len?: number
}

export interface DataTypeStructure {
    desc: string
    subfields: FieldDefinition[]
}

export type DataTypeDefinition = Record<string, DataTypeStructure>;

export interface SegmentStructure {
    desc: string
    fields: FieldDefinition[]
}

export type SegmentDefinition = Record<string, SegmentStructure>;
