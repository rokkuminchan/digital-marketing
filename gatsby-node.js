const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const jobDetailComponent = path.resolve(`src/pages/recruit/entry/entryPage.js`);
  const jobs = ["backend", "designer", "director", "new-graduate", "frontend"];
  const otherLanguages = ["vi"];
  const routePath = (job, language) => `${language ? `/${language}` : ""}/recruit/${job}/entry`;

  const result = await graphql(`
    {
        recruitEntryJson {
          EntryForm {
            title
            submit
            action
            items {
              choices
              is_required
              label
              name
              option
              placeholder
              type
            }
          }
        }
      }
    `);

  const createPageFromData = (job, language) => {
    createPage({
      path: routePath(job, language),
      component: jobDetailComponent,
      context: {
        data: result.data.recruitEntryJson
      }
    });
  };

  jobs.forEach(job => {
    createPageFromData(job);
    otherLanguages.forEach(other => createPageFromData(job, other));
  });
};