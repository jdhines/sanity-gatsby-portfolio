export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff4756576c9a4008b15642a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ooisddmc',
                  apiId: '9326ac08-22bc-4603-b062-c5ec8035a920'
                },
                {
                  buildHookId: '5ff47565c6866b0a8062d8dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1tg5u5zd',
                  apiId: '264a9458-afb5-4202-b219-e75a8734a297'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdhines/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1tg5u5zd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
