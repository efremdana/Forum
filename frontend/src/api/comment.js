import axios from 'axios';

export const getCommentById = async (articleID, commentID) => {
  try {
    const response = await axios.get(`/${articleID}/comment/${commentID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comment:', error);
    throw error;
  }
};

export const getAllCommentsForArticle = async (articleID) => {
  try {
    const response = await axios.get(`/${articleID}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const createComment = async (articleID, commentText) => {
  try {
    const response = await axios.post(`/${articleID}/comment`, {
      commentText,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

export const updateComment = async (articleID, commentID, commentText) => {
  try {
    const response = await axios.patch(`/${articleID}/comment/${commentID}`, {
      commentText,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
};

export const deleteComment = async (articleID, commentID) => {
  try {
    const response = await axios.delete(`/${articleID}/comment/${commentID}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};
