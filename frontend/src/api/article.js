import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

export const getArticleById = async (articleID) => {
  try {
    const response = await axios.get(`/article/${articleID}`)
    return response.data
  } catch (error) {
    console.error('Error fetching article:', error)
    throw error
  }
}

export const getAllArticles = async () => {
  try {
    const response = await axios.get('/articles')
    return response.data
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}

export const createArticle = async (name, text) => {
  try {
    const response = await axios.post('/article', {
      name,
      text,
    })
    return response.data
  } catch (error) {
    console.error('Error creating article:', error)
    throw error
  }
}

export const updateArticle = async (articleID, name, text) => {
  try {
    const response = await axios.patch(`/article/${articleID}`, {
      name,
      text,
    })
    return response.data
  } catch (error) {
    console.error('Error updating article:', error)
    throw error
  }
}

export const deleteArticle = async (articleID) => {
  try {
    const response = await axios.delete(`/article/${articleID}`)
    return response.data
  } catch (error) {
    console.error('Error deleting article:', error)
    throw error
  }
}
