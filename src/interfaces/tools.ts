export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
}

export interface Tools {
  tools: Array<Tool>;
}
