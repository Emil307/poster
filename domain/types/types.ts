export type TTicket = {
    title: string,
    date: string,
    introImage: string,
    artist: string,
    count: number
}

export type TEvent = {
    id: number,
    title: string,
    date: string,
    artist: string,
    cost: string,
    startAge: string,
    introImage: string,
}

export type TMessage = {
    id: number,
    date: string,
    text: string,
    owner: string
}
