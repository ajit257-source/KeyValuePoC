export interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
    id(data: any);
    disconnect(data: any);
}
