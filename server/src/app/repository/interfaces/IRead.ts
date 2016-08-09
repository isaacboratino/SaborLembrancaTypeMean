interface IRead<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, resukt: any) => void) => void;
}

export = IRead;