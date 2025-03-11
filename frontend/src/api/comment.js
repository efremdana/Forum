import axios from 'axios'

export const getCommentById = async (articleID, commentID) => {
  try {
    const response = await axios.get(`/article/${articleID}/comment/${commentID}`)
    return response.data
  } catch (error) {
    console.error('Error fetching comment:', error)
    throw error
  }
}

export const getAllCommentsForArticle = async (articleID) => {
  try {
    const response = await axios.get(`/article/${articleID}/comments`)
    return response.data
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

export const createComment = async (articleID, text) => {
  try {
    const response = await axios.post(`/article/${articleID}/comment`, {
      text,
    })
    return response.data
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}

export const updateComment = async (articleID, commentID, text) => {
  try {
    const response = await axios.patch(`/article/${articleID}/comment/${commentID}`, {
      text,
    })
    return response.data
  } catch (error) {
    console.error('Error updating comment:', error)
    throw error
  }
}

export const deleteComment = async (articleID, commentID) => {
  try {
    const response = await axios.delete(`/article/${articleID}/comment/${commentID}`)
    return response.data
  } catch (error) {
    console.error('Error deleting comment:', error)
    throw error
  }
}
