// eitket tipi
export type Tag = {
  label: string;
  value: string;
};

// formdan alıncak olan note verisini tipi
export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

// state kaydedilecek olan note verisinin tipi (id)
export type Note = { id: string } & NoteData;


// partial bir type'a ait bütün özellikleri opsiyonel yappar
type AType = {
  d1: string;
  d2: number;
  d3: boolean;
};

type BType = {
  d4: number;
  d5: string;
};

type CType = AType & Partial<BType>;

const x: CType = {
  d1: "deneme",
  d2: 344,
  d3: false,
  d4: undefined,
  d5: undefined,
};
