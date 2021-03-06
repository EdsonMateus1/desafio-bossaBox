export interface Tool {
  id?: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

export interface Store {
  tools: Array<Tool>;
  query: string;
  showModalCreate: boolean;
  showModalDelete: boolean;
  idTool : string
  queryTags : boolean;
}


