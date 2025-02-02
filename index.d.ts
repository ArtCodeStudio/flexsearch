declare module "flexsearch" {
  export interface SearchOptions {
    limit?: number,
    suggest?: boolean,
    where?: {[key: string]: string},
    field?: string | string[],
    bool?: "and" | "or" | "not"
    //TODO: Sorting
  }

  export interface SearchResults<T> {
    page?: Cursor,
    next?: Cursor,
    result: T[]
  }

  export interface Document {
      id: string;
      field: any;
  }


  export type CreateOptions = {
    profile?: IndexProfile;
    tokenize?: DefaultTokenizer | TokenizerFn;
    split?: RegExp;
    encode?: DefaultEncoder | EncoderFn | false;
    cache?: boolean | number;
    async?: boolean;
    worker?: false | number;
    depth?: false | number;
    threshold?: false | number;
    resolution?: number;
    stemmer?: Stemmer | string | false;
    filter?: FilterFn | string | false;
    rtl?: boolean;
    doc?: Document;
  };

//   limit	number	Sets the limit of results.
// suggest	true, false	Enables suggestions in results.
// where	object	Use a where-clause for non-indexed fields.
// field	string, Array<string>	Sets the document fields which should be searched. When no field is set, all fields will be searched. Custom options per field are also supported.
// bool	"and", "or"	Sets the used logical operator when searching through multiple fields.
// page	true, false, cursor	Enables paginated results.

  export type IndexProfile = "memory" | "speed" | "match" | "score" | "balance" | "fast";
  export type DefaultTokenizer = "strict" | "forward" | "reverse" | "full";
  export type TokenizerFn = (str: string) => string[];
  export type DefaultEncoder = "icase" | "simple" | "advanced" | "extra" | "balance";
  export type EncoderFn = (str: string) => string;
  export type Stemmer = {[key: string]: string};
  export type Matcher = {[key: string]: string};
  export type FilterFn = (str: string) => boolean;
  export type Cursor = string;

  export class FlexSearch<T> {
    constructor(options?: CreateOptions);
    static create<T>(options?: CreateOptions): FlexSearch<T>;
    static registerMatcher(matcher: Matcher);
    static registerEncoder(name: string, encoder: EncoderFn);
    static registerLanguage(lang: string, options: { stemmer?: Stemmer; filter?: string[] });
    static encode(name: string, str: string);

    //TODO: Chaining
    readonly id: string;
    readonly index: string;
    readonly length: number;

    init();
    init(options: CreateOptions);
    info();
    add(o: T);
    add(id: number, o: string);

    // Result without pagination -> T[]
    search(query: string, options: number | SearchOptions, callback: (results: T[]) => void): void;
    search(query: string, options?: number | SearchOptions): Promise<T[]>;
    search(options: SearchOptions & {query: string}, callback: (results: T[]) => void): void;
    search(options: SearchOptions & {query: string}): Promise<T[]>;

    // Result with pagination -> SearchResults<T>
    search(query: string, options: number | SearchOptions & { page?: boolean | Cursor}, callback: (results: SearchResults<T>) => void): void;
    search(query: string, options?: number | SearchOptions & { page?: boolean | Cursor}): Promise<SearchResults<T>>;
    search(options: SearchOptions & {query: string, page?: boolean | Cursor}, callback: (results: SearchResults<T>) => void): void;
    search(options: SearchOptions & {query: string, page?: boolean | Cursor}): Promise<SearchResults<T>>;


    update(id: number, o: T);
    remove(id: number);
    clear();
    destroy();
    addMatcher(matcher: Matcher);

    where(whereFn: (o: T) => boolean): T[];
    where(whereObj: {[key: string]: string});
    encode(str: string): string;
    export(): string;
    import(exported: string);
  }

  export default FlexSearch;
}

// FlexSearch.create(<options>)
// FlexSearch.registerMatcher({KEY: VALUE})
// FlexSearch.registerEncoder(name, encoder)
// FlexSearch.registerLanguage(lang, {stemmer:{}, filter:[]})
// FlexSearch.encode(name, string)
