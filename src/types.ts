export interface Data {
    volumeInfo: {
        title: string,
        authors: [any],
        imageLinks: {
            thumbnail: string
        },
        categories: [string],
        publisher: string,
        publishedDate: string,
        description: string
    }
}

export interface Props {
    show: boolean,
    data: Data,
    onClose: () => void
}

export interface CardItems {
    data: Data
}


