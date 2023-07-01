interface Message {
    text: string,
    createdAt: AutocompleteRenderInputParams.firestore.Timestamp;
    user: {
        _id: string,
        name: string,
        avatar: string,
    };

}