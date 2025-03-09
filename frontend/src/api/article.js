import axios from 'axios';

export const getArticleById = async (articleID) => {
  try {
    const response = await axios.get(`/article/${articleID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};

export const getAllArticles = async () => {
  try {
    const response = await axios.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const createArticle = async (articleName, articleText) => {
  try {
    const response = await axios.post('/article', {
      articleName,
      articleText
    });
    return response.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};

export const updateArticle = async (articleID, articleName, articleText) => {
  try {
    const response = await axios.patch(`/article/${articleID}`, {
      articleName,
      articleText
    });
    return response.data;
  } catch (error) {
    console.error('Error updating article:', error);
    throw error;
  }
};

export const deleteArticle = async (articleID) => {
  try {
    const response = await axios.delete(`/article/${articleID}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};
