const BookmarkPlaceStyles = {
    bookmarkContainer: {
        justifyContent: 'space-between',
        width: '92%',
        alignItems: 'center'
    },
    bookmarkInput: {
        width: '90%',
        textAlign: 'center',
        backgroundColor: '#eee',
        padding: 15,
    },
    map: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end'
    },
    inputContainer: {
        alignItems: 'center',
        width: '90%',
        padding: 12,
    },
    additionalOptionsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    additionalOption: {
        backgroundColor: '#eee',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5,
        borderWidth: 3,
        borderColor: '#f5f5f5',
        marginHorizontal: 10,
    },
    additionalOptionIcon: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#aaa',
        margin: 0,
        padding: 0,
    },
    imagesContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
    },
    addImage: {
        backgroundColor: '#eee',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    addImageIcon: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#aaa',
        margin: 0,
        padding: 0,
    },
    popupContent: { justifyContent: 'center', alignItems: 'center' },
    popupImageContainer: { backgroundColor: '#eee', width: 150, height: 150, borderRadius: 75 },
    popupImage: { width: 100, height: 100, marginVertical: 10, alignSelf: 'center', marginTop: 20, },
    popupTextContainer: { marginVertical: 20 },
    popupDescriptionText: { textAlign: 'center', fontSize: 12 },
};

export default BookmarkPlaceStyles;