import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectAllComments = () => {
    return COMMENTS;
};

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};