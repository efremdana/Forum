import Article from './articles/model.js';
import Comment from './comments/model.js';

Article.hasMany(Comment, { foreignKey: 'article_id', onDelete: 'CASCADE', as: 'comments' });
Comment.belongsTo(Article, { foreignKey: 'article_id', as: 'article' });

export { Article, Comment };