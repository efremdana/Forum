import Article from './articles/model.js';
import Comment from './comments/model.js';

Article.hasMany(Comment, { foreignKey: 'article_id', onDelete: 'CASCADE' });
Comment.belongsTo(Article, { foreignKey: 'article_id' });

export { Article, Comment };