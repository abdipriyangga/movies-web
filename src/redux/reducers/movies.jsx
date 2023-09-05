const initialState = {
    data: [],
    detail: {},
    pageInfo: {}
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GET_MOVIES":
            return {
                ...state,
                data: action.payload.movies,
                pageInfo: action.payload.pageInfo,
            };
        case "SET_NEXT_MOVIES":
            return {
                ...state,
                data: [...state.data, ...action.payload.movies],
                pageInfo: action.payload.pageInfo,
            };
        case "SET_GET_DETAIL_MOVIE":
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default movies;